document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));document.querySelectorAll("[data-category]").forEach(c=>c.hidden=b.dataset.filter!=="All"&&c.dataset.category!==b.dataset.filter)}));
// Show the full project set when navigating from the semiconductor research card.
document.getElementById('semiconductor-link')?.addEventListener('click',()=>document.querySelector('[data-filter="All"]')?.click());
