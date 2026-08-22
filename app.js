(function(){
  const data=window.INBLOGGERNABLE||{};
  const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  function card(item,featured=false){
    const statusClass=item.status==="live"?"live":"soon";
    const action=item.url?`<a class="button ${featured?"button-dark":"button-outline"}" href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.button||"VER")}</a>`:"";
    const visual=featured?`<div class="card-visual" aria-hidden="true">${item.visual||esc(item.title)}</div>`:"";
    return `<article class="card ${featured?"featured":""}"><div><span class="card-label">${esc(item.label||"")}</span><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><div class="card-actions"><span class="card-status ${statusClass}">${esc(item.statusText||"")}</span>${action}</div></div>${visual}</article>`;
  }
  function renderList(id,items,featured=false){const el=document.getElementById(id);if(el)el.innerHTML=(items||[]).map(i=>card(i,featured)).join("")}
  renderList("featuredProjects",data.featured,true);renderList("learningProjects",data.learning);renderList("teacherProjects",data.teachers);renderList("labProjects",data.lab);
  const social=document.getElementById("socialLinks");if(social){const links=(data.socials||[]).filter(x=>x.url);social.innerHTML=links.length?links.map(x=>`<a class="button button-outline" href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.name)}</a>`).join(""):`<p><strong>Hueco reservado.</strong><br><span class="muted">En cuanto pongamos los enlaces de YouTube e Instagram, aparecen aquí.</span></p>`}
  const b=document.getElementById("menuButton"),nav=document.getElementById("siteNav");if(b&&nav){b.addEventListener("click",()=>{const open=nav.classList.toggle("open");b.setAttribute("aria-expanded",String(open))});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");b.setAttribute("aria-expanded","false")}))}
})();
