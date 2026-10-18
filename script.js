const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});
document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('.project-card,.timeline-item,.about-copy,.education-inner').forEach((element,index)=>{element.classList.add('reveal');element.style.transitionDelay=`${Math.min(index%3,2)*70}ms`;observer.observe(element)});
const filterButtons=document.querySelectorAll('.filter-button');
const projectCards=document.querySelectorAll('.project-card');
const filterCount=document.querySelector('.filter-count');
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  let visible=0;
  filterButtons.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
  projectCards.forEach(card=>{const show=filter==='all'||card.dataset.categories.split(' ').includes(filter);card.hidden=!show;if(show)visible++});
  filterCount.textContent=`Showing ${visible} project${visible===1?'':'s'}`;
}));
