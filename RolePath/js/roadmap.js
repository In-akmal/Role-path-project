
document.addEventListener('DOMContentLoaded',()=>{
 const id=new URLSearchParams(location.search).get('id')||'java-basics', r=ROADMAPS.find(x=>x.id===id);
 if(!r){location.href='404.html';return}
 if(!r.free&&!Store.enrolled().includes(id)){location.href=`payment.html?id=${id}`;return}
 Store.enroll(id);
 document.getElementById('roadmapTitle').textContent=r.name;
 document.getElementById('roadmapDesc').textContent=r.desc;
 const saved=Store.progress(id), list=document.getElementById('topicList');
 list.innerHTML=r.topics.map((t,i)=>`<label class="topic ${saved.includes(i)?'done':''}"><input type="checkbox" data-i="${i}" ${saved.includes(i)?'checked':''}><span>${t}</span></label>`).join('');
 function update(){
  const done=[...list.querySelectorAll('input:checked')].map(x=>+x.dataset.i); Store.setProgress(id,done);
  list.querySelectorAll('.topic').forEach(x=>x.classList.toggle('done',x.querySelector('input').checked));
  const p=Math.round(done.length/r.topics.length*100);
  document.getElementById('progressFill').style.width=p+'%';document.getElementById('progressText').textContent=p+'%';
  document.getElementById('doneCount').textContent=done.length;document.getElementById('remainingCount').textContent=r.topics.length-done.length;
 }
 list.addEventListener('change',update);update();
});
