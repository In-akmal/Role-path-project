
document.addEventListener('DOMContentLoaded',()=>{
 const enrolled=Store.enrolled(), items=ROADMAPS.filter(r=>enrolled.includes(r.id)), user=Store.user();
 const avg=items.length?Math.round(items.reduce((s,r)=>s+percent(r),0)/items.length):0;
 const name=document.getElementById('userName'); if(name)name.textContent=user.name.split(' ')[0];
 document.getElementById('overall').textContent=avg+'%';
 document.getElementById('roadmapCount').textContent=items.length;
 document.getElementById('completedCount').textContent=items.reduce((s,r)=>s+Store.progress(r.id).length,0);
 const list=document.getElementById('dashboardRoadmaps');
 list.innerHTML=items.length?items.map(r=>`<div class="roadmap-row"><div class="roadmap-icon">${r.icon}</div><div class="grow"><strong>${r.name}</strong><div class="progress" style="margin-top:9px"><div class="progress-fill" style="width:${percent(r)}%"></div></div><small class="muted">${percent(r)}% complete</small></div><a class="btn btn-primary" href="roadmap-details.html?id=${r.id}">Continue</a></div>`).join(''):'<div class="empty">No roadmaps started yet. <a href="roadmaps.html" style="color:var(--primary)">Explore roadmaps</a>.</div>';
 const activity=document.getElementById('activity');
 activity.innerHTML=items.length?items.slice(0,4).map(r=>`<div class="activity"><strong>${r.name}</strong><div class="muted">${Store.progress(r.id).length} topics completed</div></div>`).join(''):'<div class="empty">Your learning activity will appear here.</div>';
});
