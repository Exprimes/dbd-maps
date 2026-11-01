// Menu déroulant des catégories "Nos Logiciels", partagé par index.html et logiciels.html.
// À charger avant i18n.js pour que le menu soit traduit.
document.body.insertAdjacentHTML('beforeend', `
  <div id="cat-menu" role="menu" class="fixed z-[60] w-72 bg-[#120c22] border border-purple-500/40 rounded-2xl p-2 shadow-[0_0_40px_rgba(168,85,247,0.4)] text-left hidden">
    <a href="logiciels.html?cat=dbd" role="menuitem" class="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-600/20 transition">
      <span class="text-2xl">🔦</span>
      <span>
        <span class="block font-black text-white text-sm">Dead by Daylight</span>
        <span data-i18n="cat.dbd_desc" class="block text-xs text-gray-400">Compagnon DBDMapsOmni : cartes HD en overlay</span>
      </span>
    </a>
    <a href="logiciels.html?cat=pc" role="menuitem" class="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-600/20 transition">
      <span class="text-2xl">🖥️</span>
      <span>
        <span data-i18n="cat.pc" class="block font-black text-white text-sm">Outils PC</span>
        <span data-i18n="cat.pc_desc" class="block text-xs text-gray-400">OmniShield, OmniVencord, Uninstaller</span>
      </span>
    </a>
  </div>
`);

// Placé sous le bouton cliqué ; un second clic sur le même bouton le referme
let catMenuTrigger = null;
function openCatMenu(e) {
  e.preventDefault();
  e.stopPropagation();
  const menu = document.getElementById('cat-menu');
  if (catMenuTrigger === e.currentTarget) return closeCatMenu();
  catMenuTrigger = e.currentTarget;
  menu.classList.remove('hidden');
  const r = catMenuTrigger.getBoundingClientRect();
  const left = Math.min(Math.max(8, r.left + r.width / 2 - menu.offsetWidth / 2), innerWidth - menu.offsetWidth - 8);
  menu.style.left = left + 'px';
  menu.style.top = (r.bottom + 8) + 'px';
}
function closeCatMenu() {
  document.getElementById('cat-menu').classList.add('hidden');
  catMenuTrigger = null;
}
document.addEventListener('click', e => { if (!e.target.closest('#cat-menu')) closeCatMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCatMenu(); });
addEventListener('scroll', closeCatMenu);
addEventListener('resize', closeCatMenu);
