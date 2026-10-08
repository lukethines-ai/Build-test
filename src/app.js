const products = [
  { id: 'nook', brand: 'SMALL SPACE / READY TO PLAY', name: 'The Music Nook Cabinet', category: 'Cabinetry', finish: 'Oak concept · 100 × 45 cm footprint', detail: 'Pull-out keyboard shelf, laptop surface and cable storage.', price: 649, kind: 'cabinet', badge: 'ONE CORNER, MANY POSSIBILITIES' },
  { id: 'shelf', brand: 'KEEP IDEAS WITHIN REACH', name: 'The Everyday Gear Shelf', category: 'Shelving', finish: 'Oak concept · 60 × 25 cm shelf', detail: 'A home for compact mixers, sequencers and audio interfaces.', price: 129, kind: 'shelf', badge: 'CLEAR YOUR DESK' },
  { id: 'guitar', brand: 'PICK UP & PLAY', name: 'The Living Room Guitar Stand', category: 'Stands', finish: 'Walnut concept · 32 × 32 cm base', detail: 'A dedicated resting place for your everyday guitar.', price: 89, kind: 'guitar', badge: 'KEEP IT CLOSE' },
  { id: 'laptop', brand: 'A LITTLE LIFT', name: 'The Laptop & Mixer Riser', category: 'Stands', finish: 'Oak concept · 45 × 30 cm surface', detail: 'Lift your laptop or compact mixer and reclaim the space below.', price: 99, kind: 'riser', badge: '' },
  { id: 'keys', brand: 'YOUR OWN LITTLE STUDIO', name: 'The Keyboard Corner Stand', category: 'Stands', finish: 'Oak concept · 110 × 40 cm footprint', detail: 'A keyboard surface with an upper tier for a small sequencer.', price: 249, kind: 'keyboard', badge: 'MAKE THE MOST OF YOUR CORNER' },
  { id: 'console', brand: 'MUSIC MEETS EVERYDAY LIVING', name: 'The Session Storage Console', category: 'Cabinetry', finish: 'Oak concept · 120 × 40 cm footprint', detail: 'Open gear shelves and closed storage for cables and accessories.', price: 499, kind: 'console', badge: '' },
];
const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
let category = 'All';
let bag = {};
try { const saved = JSON.parse(localStorage.getItem('room-for-music-bag') || '{}'); for (const g of products) if (Number.isInteger(saved[g.id]) && saved[g.id] > 0) bag[g.id] = Math.min(saved[g.id], 99); } catch {}
function productArt(g) {
  const laptop = '<path d="M90 90h72l-3 48H94Z" fill="#393e36"/><path d="M95 95h61l-2 35H98Z" fill="#a6b4a0"/><path d="M87 140h80l-8 6H95Z" fill="#5b6157"/>';
  const keys = '<rect x="35" y="159" width="178" height="26" rx="3" fill="#333b32"/><rect x="40" y="171" width="168" height="12" fill="#f8f5e9"/>' + Array.from({length:21},(_,i)=>`<path d="M${44+i*8} 171v12" stroke="#b7b7a8"/>${i%7!==2&&i%7!==6?`<rect x="${47+i*8}" y="171" width="4" height="7" fill="#333b32"/>`:''}`).join('');
  const mixer = '<rect x="82" y="120" width="82" height="30" rx="3" fill="#495347"/>' + Array.from({length:6},(_,i)=>`<circle cx="${92+i*12}" cy="128" r="2" fill="#c7d7b3"/><path d="M${92+i*12} 134v11" stroke="#9aab8d"/>`).join('');
  const guitar = '<path d="M119 155c-23-16-37 8-24 27-32 25-13 57 15 57s45-30 20-56c12-20 4-39-11-28Z" fill="#b78050" stroke="#735035"/><circle cx="112" cy="187" r="12" fill="#4c3727"/><path d="M107 95h10v84h-10Z" fill="#75583b"/><path d="M104 76h16v25h-16Z" fill="#bb925c"/><path d="M112 83v137" stroke="#e6d5ae"/><path d="M100 215h24" stroke="#473728" stroke-width="5"/>';
  let art;
  if(g.kind==='cabinet') art='<rect x="30" y="147" width="190" height="12" fill="#c7a679"/><path d="M38 159v99h12v-99m152 0v99h12v-99" fill="#a8855c"/><rect x="51" y="193" width="150" height="42" fill="#c3a078"/><path d="M125 195v39" stroke="#99774e"/><circle cx="114" cy="213" r="2" fill="#5e604e"/><circle cx="138" cy="213" r="2" fill="#5e604e"/>'+laptop+keys;
  else if(g.kind==='shelf') art='<path d="M29 153h192v12H29Z" fill="#c4a175"/><path d="M54 165v35l27-35m114 0v35l-27-35" fill="none" stroke="#64705d" stroke-width="5"/>'+mixer+'<rect x="177" y="126" width="29" height="25" fill="#b9c1ac"/>';
  else if(g.kind==='guitar') art='<path d="M91 233l-23 27m57-27l29 27M108 166v78" stroke="#644c35" stroke-width="8" fill="none"/><ellipse cx="112" cy="262" rx="48" ry="8" fill="#bd996f"/>'+guitar;
  else if(g.kind==='riser') art='<path d="M51 148h149v10H51Z" fill="#c6a477"/><path d="M57 158v44h11v-44m114 0v44h11v-44" fill="#a98760"/>'+laptop+'<rect x="88" y="177" width="77" height="19" rx="3" fill="#626e5a"/><circle cx="150" cy="186" r="5" fill="#d8dccf"/>';
  else if(g.kind==='keyboard') art='<path d="M35 185h178v10H35Z" fill="#c7a579"/><path d="M47 195v66m153-66v66" stroke="#a7865e" stroke-width="10"/><path d="M150 157v-14H74v14" stroke="#66715e" stroke-width="5" fill="none"/>'+keys+mixer;
  else art='<rect x="28" y="155" width="194" height="78" fill="#bb9569"/><path d="M38 233v23m174-23v23" stroke="#786245" stroke-width="7"/><rect x="39" y="167" width="78" height="53" fill="#615b46"/><path d="M39 193h78" stroke="#c6a478" stroke-width="5"/><rect x="47" y="175" width="60" height="13" fill="#a8b19a"/><rect x="51" y="202" width="41" height="13" fill="#454b3e"/><path d="M132 167v52m73-52v52" stroke="#ac845b"/><circle cx="197" cy="192" r="3" fill="#67533c"/>'+mixer;
  return `<svg viewBox="0 0 250 310" role="img" aria-label="${g.name} concept illustration"><ellipse cx="125" cy="268" rx="92" ry="9" fill="#deded2"/><g stroke-linejoin="round">${art}</g></svg>`;
}
function renderProducts() {
  let items = products.filter(g => category === 'All' || g.category === category);
  const order = document.querySelector('#sort').value;
  if (order !== 'featured') items.sort((a,b) => order === 'low' ? a.price-b.price : b.price-a.price);
  document.querySelector('#products').innerHTML = items.map(g => `<article class="product"><div class="product-image">${g.badge ? `<span class="badge">${g.badge}</span>` : ''}${productArt(g)}<button class="add-button" data-add="${g.id}" aria-label="Add ${g.name} to bag">+</button></div><p class="brand">${g.brand} / ${g.category.toUpperCase()}</p><h3>${g.name}</h3><p class="finish">${g.finish}</p><p class="product-detail">${g.detail}</p><p class="price">${money(g.price)}</p></article>`).join('');
}
let toastTimer;
function persist() { try { localStorage.setItem('room-for-music-bag', JSON.stringify(bag)); } catch {} renderCart(); }
function renderCart() {
  const items = products.filter(g => bag[g.id]);
  document.querySelector('#cart-count').textContent = Object.values(bag).reduce((a,b)=>a+b,0);
  document.querySelector('#cart-items').innerHTML = items.length ? items.map(g=>`<div class="cart-row"><div><h3>${g.name}</h3><p>${g.finish}</p><div class="quantity"><button data-change="${g.id}" data-delta="-1" aria-label="Remove one ${g.name}">−</button><span>${bag[g.id]}</span><button data-change="${g.id}" data-delta="1" aria-label="Add one ${g.name}">+</button></div></div><strong>${money(g.price*bag[g.id])}</strong></div>`).join('') : '<p>Your bag is waiting for a little room for music.</p>';
  document.querySelector('#total').textContent = money(items.reduce((sum,g)=>sum+g.price*bag[g.id],0));
  document.querySelector('#checkout').disabled = !items.length;
  document.querySelector('#checkout-message').textContent = '';
}
document.querySelector('.tabs').addEventListener('click', e => {
  const button = e.target.closest('[data-category]'); if (!button) return;
  category = button.dataset.category;
  document.querySelectorAll('[data-category]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  renderProducts();
});
document.querySelector('#sort').addEventListener('change',renderProducts);
document.querySelector('#products').addEventListener('click',e=>{
  const button = e.target.closest('[data-add]'); if (!button) return;
  bag[button.dataset.add] = Math.min(99,(bag[button.dataset.add]||0)+1); persist();
  const toast = document.querySelector('#toast'); toast.textContent = 'Added to your bag'; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('visible'),2200);
});
const dialog = document.querySelector('#cart');
document.querySelector('#open-cart').addEventListener('click',()=>dialog.showModal());
document.querySelector('#close-cart').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog && e.clientX < dialog.getBoundingClientRect().left) dialog.close();});
document.querySelector('#cart-items').addEventListener('click',e=>{
  const b=e.target.closest('[data-change]'); if(!b) return;
  bag[b.dataset.change]=Math.min(99,bag[b.dataset.change]+Number(b.dataset.delta)); if(!bag[b.dataset.change]) delete bag[b.dataset.change]; persist();
});
document.querySelector('#checkout').addEventListener('click',()=>{document.querySelector('#checkout-message').textContent='This is a demo store. Payments are not connected yet — no charge has been made.';});
renderProducts(); renderCart();
