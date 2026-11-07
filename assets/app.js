const header=document.querySelector('.site-header');const toggle=document.querySelector('.menu-toggle');toggle.addEventListener('click',()=>{const open=header.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const tabs=document.querySelectorAll('[role=tab]');tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.setAttribute('aria-selected','false'));document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));tab.setAttribute('aria-selected','true');document.getElementById(tab.dataset.tab).classList.add('active')}));
const search=document.getElementById('resourceSearch'),filter=document.getElementById('resourceFilter'),items=[...document.querySelectorAll('#resourceList article')],empty=document.querySelector('.empty-state');function filterResources(){const q=search.value.trim().toLowerCase(),type=filter.value;let shown=0;items.forEach(item=>{const okText=!q||(item.dataset.keywords+' '+item.innerText).toLowerCase().includes(q);const okType=type==='all'||item.dataset.type===type;item.hidden=!(okText&&okType);if(!item.hidden)shown++});empty.hidden=shown!==0}search.addEventListener('input',filterResources);filter.addEventListener('change',filterResources);
const toast=document.getElementById('toast');let toastTimer;function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}document.querySelectorAll('[data-toast]').forEach(el=>el.addEventListener('click',()=>showToast(el.dataset.toast)));
const modal=document.getElementById('submitModal');document.querySelectorAll('.open-modal').forEach(b=>b.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}document.querySelectorAll('.modal-close,.modal-close-action').forEach(b=>b.addEventListener('click',closeModal));modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.getElementById('feedbackForm').addEventListener('submit',e=>{e.preventDefault();showToast('Đã kiểm tra biểu mẫu mẫu. Chưa có dữ liệu nào được gửi đi.');e.target.reset()});
const allBtn=document.getElementById('showAllCards');allBtn.addEventListener('click',()=>{document.querySelectorAll('.extra-card').forEach(c=>c.style.display='block');showToast('Đang hiển thị toàn bộ nội dung mẫu.')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
/* ====== KHU VỰC DỮ LIỆU: TÓM TẮT LUẬT ====== */
function escapeHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

function buildTomTat(){
  const tabsBox=document.getElementById('tomTatTabs');
  const panelsBox=document.getElementById('tomTatPanels');
  if(!tabsBox||panelsBox===null||typeof TOM_TAT==='undefined')return;
  const duyet=TOM_TAT.filter(t=>t.trangThai==='da-duyet');
  if(!duyet.length){panelsBox.innerHTML='<article class="tab-panel active"><p>Nội dung đang được cập nhật.</p></article>';return}

  tabsBox.innerHTML=duyet.map((t,i)=>`<button role="tab" aria-selected="${i===0}" data-tab="${t.id}">${escapeHtml(t.nhan)}</button>`).join('');

  panelsBox.innerHTML=duyet.map((t,i)=>{
    const body=(t.noiDung||[]).map(b=>{
      if(b.loai==='h')return `<h4>${escapeHtml(b.text)}</h4>`;
      if(b.loai==='ul')return `<ul>${(b.list||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul>`;
      return `<p>${escapeHtml(b.text)}</p>`;
    }).join('');
    const luuY=t.luuY?`<div class="mini-legal"><b>Lưu ý biên tập:</b> ${escapeHtml(t.luuY)}</div>`:'';
    const canCu=t.canCu?`<div class="legal-source"><b>Căn cứ pháp lý:</b> ${escapeHtml(t.canCu)}</div>`:'';
    return `<article id="${t.id}" class="tab-panel${i===0?' active':''}" role="tabpanel">
      <div class="meta-row">
        <span class="tag ${t.nhanTrangThai==='Đã rà soát'?'status-approved':'status-draft'}">${escapeHtml(t.nhanTrangThai||'Đã rà soát')}</span>
        <span class="updated">Cập nhật: ${escapeHtml(t.capNhat||'')}</span>
      </div>
      <h3>${escapeHtml(t.tieuDe)}</h3>
      <div class="content-body"><p class="lead">${escapeHtml(t.gioiThieu)}</p>${body}${luuY}</div>
      ${canCu}
    </article>`;
  }).join('');
}

/* ====== KHU VỰC DỮ LIỆU: TÀI LIỆU THAM KHẢO ====== */
function buildTaiLieu(){
  const box=document.getElementById('resourceList');
  if(!box||typeof TAI_LIEU==='undefined')return;
  box.innerHTML=TAI_LIEU.map(d=>{
    const links=(d.lienKet||[]).length
      ? `<div class="resource-links">${d.lienKet.map(l=>`<a href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.nhan)} ↗</a>`).join('')}</div>`
      : '<p class="pending">Đang chờ bổ sung đường dẫn chính thức.</p>';
    return `<article data-type="${escapeHtml(d.loai)}" data-keywords="${escapeHtml(d.tieuDe+' '+d.nguon)}">
      <div class="file-icon">${escapeHtml(d.ma)}</div>
      <div>
        <span class="meta">${escapeHtml(d.nhanLoai)}</span>
        <h3>${escapeHtml(d.tieuDe)}</h3>
        <p>${escapeHtml(d.nguon)} · Cập nhật: ${escapeHtml(d.capNhat)}</p>
        ${links}
      </div>
    </article>`;
  }).join('');
}

/* ====== KHỞI TẠO LẠI CÁC TƯƠNG TÁC SAU KHI DỰNG DỮ LIỆU ====== */
function initTabs(){
  const tabs=document.querySelectorAll('#tomTatTabs [role=tab]');
  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.setAttribute('aria-selected','false'));
    document.querySelectorAll('#tomTatPanels .tab-panel').forEach(p=>p.classList.remove('active'));
    tab.setAttribute('aria-selected','true');
    const panel=document.getElementById(tab.dataset.tab);
    if(panel)panel.classList.add('active');
  }));
}

function initResources(){
  const search=document.getElementById('resourceSearch');
  const filter=document.getElementById('resourceFilter');
  const empty=document.querySelector('.empty-state');
  if(!search||!filter)return;
  const items=[...document.querySelectorAll('#resourceList article')];
  function apply(){
    const q=search.value.trim().toLowerCase(),type=filter.value;
    let shown=0;
    items.forEach(item=>{
      const okText=!q||(item.dataset.keywords+' '+item.innerText).toLowerCase().includes(q);
      const okType=type==='all'||item.dataset.type===type;
      item.hidden=!(okText&&okType);
      if(!item.hidden)shown++;
    });
    if(empty)empty.hidden=shown!==0;
  }
  search.addEventListener('input',apply);
  filter.addEventListener('change',apply);
}

buildTomTat();
buildTaiLieu();
initTabs();
initResources();
