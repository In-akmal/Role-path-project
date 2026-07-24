
document.addEventListener('DOMContentLoaded',()=>{
 const id=new URLSearchParams(location.search).get('id')||'java-full-stack', r=ROADMAPS.find(x=>x.id===id);
 if(!r){location.href='404.html';return}
 document.querySelectorAll('[data-roadmap-name]').forEach(x=>x.textContent=r.name);
 document.getElementById('payBtn')?.addEventListener('click',()=>{
  const b=document.getElementById('payBtn');b.disabled=true;b.textContent='Processing...';
  setTimeout(()=>{Store.enroll(id);location.href=`payment-success.html?id=${id}`},900);
 });
});
