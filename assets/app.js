const header=document.querySelector('.site-header');const toggle=document.querySelector('.menu-toggle');if(toggle){toggle.addEventListener('click',()=>{const open=header.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});}document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));


const toast=document.getElementById('toast');let toastTimer;function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}document.querySelectorAll('[data-toast]').forEach(el=>el.addEventListener('click',()=>showToast(el.dataset.toast)));
function openModal(id){const m=document.getElementById(id);if(!m)return;m.classList.add('open');m.setAttribute('aria-hidden','false')}function closeModal(){document.querySelectorAll('.modal.open').forEach(m=>{m.classList.remove('open');m.setAttribute('aria-hidden','true')})}document.addEventListener('click',e=>{if(e.target.classList.contains('modal'))closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.getElementById('feedbackForm').addEventListener('submit',e=>{e.preventDefault();showToast('Đã kiểm tra biểu mẫu mẫu. Chưa có dữ liệu nào được gửi đi.');e.target.reset()});

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

/* ====== KHU VỰC DỮ LIỆU: PHÁP LUẬT TRỰC QUAN ====== */
function esc(s){return escapeHtml(s)}

function buildInfoGrid(){
  const grid=document.getElementById('infoGrid');
  if(!grid||typeof INFOGRAPHIC==='undefined')return;
  const duyet=INFOGRAPHIC.filter(i=>i.trangThai==='da-duyet');
  grid.innerHTML=duyet.map(i=>`<article class="info-card reveal visible" id="card-${i.id}">
      <div class="visual ${esc(i.lopMau)}"><span>${esc(i.so)}</span></div>
      <div>
        <span class="meta">${esc(i.nhan)}</span>
        <h3>${esc(i.tieuDe)}</h3>
        <p>${esc(i.tomTat)}</p>
        <button class="card-link" data-info="${i.id}">${esc(i.nhanLienKet)}</button>
      </div>
    </article>`).join('');
}

function blockHtml(b){
  if(b.loai==='soLieu'){
    return `<div class="stat-row">${b.muc.map(m=>`<div><strong>${esc(m.so)}</strong><span>${esc(m.nhan)}</span></div>`).join('')}</div>`;
  }
  if(b.loai==='muc'){
    const items=(b.muc||[]).map(m=>`<li><span class="num">${esc(m.so)}</span><div><b>${esc(m.ten)}</b><p>${esc(m.text)}</p></div></li>`).join('');
    return `<div class="info-block">${b.tieuDe?`<h4>${esc(b.tieuDe)}</h4>`:''}<ul class="muc-list">${items}</ul></div>`;
  }
  if(b.loai==='cacMuc'){
    const items=(b.muc||[]).map(m=>`<div><b>${esc(m.ten)}</b><span>${esc(m.text)}</span></div>`).join('');
    return `<div class="info-block">${b.tieuDe?`<h4>${esc(b.tieuDe)}</h4>`:''}<div class="nhan-grid">${items}</div></div>`;
  }
  if(b.loai==='buoc'){
    const items=(b.muc||[]).map(m=>{
      const lis=(m.text&&m.text.length)?`<ul>${m.text.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'';
      const out=m.dauRa?`<span class="step-out">${esc(m.dauRa)}</span>`:'';
      return `<li><span class="num">${esc(m.so)}</span><div><b>${esc(m.ten)}</b>${lis}${out}</div></li>`;
    }).join('');
    return `<div class="info-block">${b.tieuDe?`<h4>${esc(b.tieuDe)}</h4>`:''}<ul class="step-list">${items}</ul></div>`;
  }
  if(b.loai==='nhan'){
    const items=(b.muc||[]).map(m=>`<div><b>${esc(m.ten)}</b>${m.text?`<span>${esc(m.text)}</span>`:''}</div>`).join('');
    return `<div class="info-block">${b.tieuDe?`<h4>${esc(b.tieuDe)}</h4>`:''}<div class="nhan-grid">${items}</div></div>`;
  }
  if(b.loai==='thongDiep'){
    return `<div class="thong-diep"><span>Thông điệp</span><p>${esc(b.text)}</p></div>`;
  }
  if(b.loai==='luuY'){
    return `<div class="info-block"><div class="mini-legal"><b>${esc(b.tieuDe||'Lưu ý')}:</b> ${esc(b.text)}</div></div>`;
  }
  return '';
}

function openInfo(id){
  const box=document.getElementById('infoDetail');
  const item=(typeof INFOGRAPHIC!=='undefined')?INFOGRAPHIC.find(i=>i.id===id):null;
  if(!box||!item)return;
  const body=(item.khoi||[]).map(blockHtml).join('');
  const luuY=item.luuY?`<div class="mini-legal" style="margin-top:0"><b>Lưu ý biên tập:</b> ${esc(item.luuY)}</div>`:'';
  const canCu=item.canCu?`<div class="legal-source"><b>Căn cứ pháp lý:</b> ${esc(item.canCu)}</div>`:'';
  const so=item.lopMau.replace('mau-','');
  box.innerHTML=`<div class="info-detail-head bg-${so}">
      <span class="big">${esc(item.so)}</span>
      <div><h3>${esc(item.tieuDe)}</h3><p>${esc(item.phuDe||item.tomTat)}</p></div>
      <button class="info-detail-close" data-close="1">Đóng</button>
    </div>
    <div class="info-detail-body">
      <span class="updated">Cập nhật: ${esc(item.capNhat||'')} · Ghi chú thiết kế: ${esc(item.thietKe||'')}</span>
      ${body}${luuY}${canCu}
    </div>`;
  box.classList.add('open');
  box.scrollIntoView({behavior:'smooth',block:'start'});
}

function initInfo(){
  document.addEventListener('click',e=>{
    const openBtn=e.target.closest('[data-info]');
    if(openBtn){openInfo(openBtn.dataset.info);return}
    if(e.target.closest('[data-close]')){
      const box=document.getElementById('infoDetail');
      if(box)box.classList.remove('open');
    }
  });
}

buildInfoGrid();
initInfo();

/* ====== KHU VỰC DỮ LIỆU: GÓC NHÌN TÀI CHÍNH ====== */
function buildPosts(){
  const grid=document.getElementById('postGrid');
  if(!grid||typeof BAI_VIET==='undefined')return;
  const posts=BAI_VIET.filter(p=>p.trangThai==='da-duyet');
  const featured=posts.find(p=>p.noiBat)||posts[0];
  const others=posts.filter(p=>p.id!==featured.id);
  grid.innerHTML=`<article class="featured-post reveal visible"><span class="tag gold">Bài viết tiêu điểm</span><h3>${escapeHtml(featured.tieuDe)}</h3><p>${escapeHtml(featured.tomTat)}</p><div class="post-meta">${escapeHtml(featured.chuyenMuc)} · ${escapeHtml(featured.thoiGianDoc)} · ${escapeHtml(featured.nhan)}</div><button class="button light-button" data-post="${featured.id}">Đọc bài viết</button></article><aside class="submission reveal visible"><h3>Bài viết khác</h3><div class="post-list">${others.map(p=>`<article class="post-card"><span class="tag gold">${escapeHtml(p.nhan)}</span><h3>${escapeHtml(p.tieuDe)}</h3><p>${escapeHtml(p.tomTat)}</p><button class="button gold-button" data-post="${p.id}">Đọc bài viết</button></article>`).join('')}</div><button class="button gold-button open-modal" data-modal="submitModal" style="margin-top:18px">Gửi nội dung</button></aside>`;
}
function openPost(id){
 const box=document.getElementById('postDetail'); const p=(typeof BAI_VIET!=='undefined')?BAI_VIET.find(x=>x.id===id):null; if(!box||!p)return;
 const body=(p.noiDung||[]).map(b=>{if(b.loai==='h')return `<h4>${escapeHtml(b.text)}</h4>`; if(b.loai==='h4')return `<h5>${escapeHtml(b.text)}</h5>`; if(b.loai==='ul')return `<ul>${(b.list||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul>`; return `<p>${escapeHtml(b.text)}</p>`}).join('');
 box.innerHTML=`<div class="post-head"><button class="post-close" data-post-close="1">Đóng</button><span class="tag status-approved">Đã duyệt</span><h3>${escapeHtml(p.tieuDe)}</h3><p>${escapeHtml(p.chuyenMuc)} · ${escapeHtml(p.thoiGianDoc)} · Cập nhật: ${escapeHtml(p.capNhat)}</p></div><div class="post-body">${body}<div class="thong-diep"><span>Thông điệp nổi bật</span><p>${escapeHtml(p.thongDiep)}</p></div>${p.nguon?`<div class="post-source"><b>Nguồn:</b> ${escapeHtml(p.nguon.replace(/^Nguồn:\s*/,''))}</div>`:''}<div class="mini-legal"><b>Lưu ý:</b> Bài viết là bài phân tích, bình luận chính sách; không thay thế văn bản hướng dẫn thi hành.</div></div>`;
 box.classList.add('open'); box.scrollIntoView({behavior:'smooth',block:'start'});
}
function initPosts(){document.addEventListener('click',e=>{const b=e.target.closest('[data-post]'); if(b){openPost(b.dataset.post);return} if(e.target.closest('[data-post-close]')){const box=document.getElementById('postDetail'); if(box)box.classList.remove('open')}})}
buildPosts();initPosts();

/* ====== HỘP THOẠI GỬI NỘI DUNG (dùng uỷ quyền sự kiện) ====== */
document.addEventListener('click',e=>{
  const opener=e.target.closest('[data-modal]');
  if(opener){openModal(opener.dataset.modal);return}
  if(e.target.closest('.modal-close,.modal-close-action')){closeModal();return}
});
const fb=document.getElementById('feedbackForm');
if(fb){fb.addEventListener('submit',e=>{e.preventDefault();showToast('Đã kiểm tra biểu mẫu mẫu. Chưa có dữ liệu nào được gửi đi.');e.target.reset()})}
