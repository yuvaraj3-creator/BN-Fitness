const b=document.getElementById('menuBtn'),m=document.getElementById('mobileMenu');
if(b&&m)b.onclick=()=>{
  const open=m.classList.toggle('open');
  document.body.style.overflow=open?'hidden':'';
  b.setAttribute('aria-expanded',String(open));
};
document.querySelectorAll('.mobile a').forEach(a=>a.onclick=()=>{
  m?.classList.remove('open');
  document.body.style.overflow='';
  b?.setAttribute('aria-expanded','false');
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&m?.classList.contains('open')){
    m.classList.remove('open');
    document.body.style.overflow='';
    b?.setAttribute('aria-expanded','false');
  }
});
document.querySelectorAll('[data-wa]').forEach(f=>f.onsubmit=e=>{e.preventDefault();let d=new FormData(f);let t='Hi BN FITNESS, I am '+(d.get('name')||'Guest')+'. Phone: '+(d.get('phone')||'')+'. Interest: '+(d.get('interest')||'General')+'. '+(d.get('message')||'');open('https://wa.me/917550177070?text='+encodeURIComponent(t),'_blank')});
