const items=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
items.forEach(item=>io.observe(item));
