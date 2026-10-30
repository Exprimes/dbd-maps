// ==========================================================================
// OMNI Multi-Language System (i18n: FR / EN)
// ==========================================================================

const OMNI_TRANSLATIONS = {
  fr: {
    // Nav & General
    "nav.home": "Accueil",
    "nav.software": "Nos Logiciels",
    "nav.discord": "Discord",
    "nav.btn_software": "NOS LOGICIELS",
    "nav.btn_discord": "DISCORD",

    // Index - Hero
    "index.tag": "OMNI SUITE • CRÉATIONS LOGICIELLES INDÉPENDANTES",
    "index.hero_title_sub": "L'excellence logicielle. Sans compromis.",
    "index.hero_desc": "Des outils interactifs puissants taillés pour les joueurs et les utilisateurs Windows : compagnons tactiques immersifs, utilitaires système ultra-légers et zéro artifice.",
    "index.cta_software": "NOS LOGICIELS",
    "index.cta_discord": "REJOINDRE LE DISCORD",

    // Index - 3 Pillars
    "index.pillar1_tag": "01 // PERFORMANCE",
    "index.pillar1_title": "Développé en Natif",
    "index.pillar1_desc": "Applications légères pour Windows sans surconsommation de mémoire ni bloatware.",

    "index.pillar2_tag": "02 // INDÉPENDANCE",
    "index.pillar2_title": "Créations Autonomes",
    "index.pillar2_desc": "Compagnons tactiques et utilitaires système conçus avec passion pour la communauté.",

    "index.pillar3_tag": "03 // SÉCURITÉ",
    "index.pillar3_title": "100% Sûr & Transparent",
    "index.pillar3_desc": "Aucune injection de code risquée, respect total des jeux et des utilisateurs.",

    // Logiciels - Header
    "software.tag": "CATALOGUE OFFICIEL DES LOGICIELS OMNI",
    "software.title": "Nos Logiciels & Outils",
    "software.desc": "Explorez l'ensemble de notre suite indépendante : compagnons de jeu officiels, outils in-game transparents et utilitaires système pour Windows.",

    // Logiciels - Media Tabs & Preview
    "software.tab_video": "▶ Vidéo Démo (v2)",
    "software.tab_image": "📸 Capture d'Écran HD",
    "software.zoom_btn": "Agrandir en 2K",
    "software.video_desc": "Vidéo de présentation officielle avec musique & aperçu en direct de l'overlay transparent.",
    "software.label_video": "Démonstration en Jeu",
    "software.label_image": "Capture d'Écran Officielle 2K",

    // DBDMapsOmni Card
    "dbd.tag": "Gaming Companion",
    "dbd.desc": "Le compagnon officiel Dead by Daylight. Affichez les 44 cartes HD officielles en surimpression transparente directe pendant votre partie ou utilisez le lobby d'équipe synchronisé sur mobile.",
    "dbd.feat1": "44 Cartes HD avec repérages & callouts 1 à 12",
    "dbd.feat2": "Transparence réglable & Clic à travers le jeu",
    "dbd.feat3": "100% Léger, 0% drop de FPS & sans risque EAC",
    "dbd.dl_title": "⬇ Télécharger selon votre appareil :",
    "dbd.btn_win_sub": "Overlay transparent in-game",
    "dbd.btn_apk_title": "Android (.APK)",
    "dbd.btn_apk_sub": "Télécharger le fichier APK",
    "dbd.btn_ios_title": "iPhone & iPad (iOS)",
    "dbd.btn_ios_sub": "Installer via Safari (PWA)",
    "dbd.btn_web_title": "Lancer la Web App",
    "dbd.btn_web_sub": "Sur navigateur / 2nd écran",

    // OmniShield Card & Modal
    "omnishield.tab_video": "▶ Vidéo de Présentation",
    "omnishield.tag": "Extension Web • Chrome / Brave / Edge",
    "omnishield.status": "v1.7.1 Disponible",
    "dbd.status": "v2.2.2 Disponible",
    "omnishield.title": "OmniShield AdBlocker",
    "omnishield.desc": "Le bloqueur ultime pour YouTube et Twitch. Saut automatique des publicités YouTube à vitesse x16, contournement total des publicités Twitch via le moteur VAFT (v37.0.0) pour continuer le live sans coupure ni écran noir, et amplificateur audio jusqu'à 300%.",
    "omnishield.feat1": "Twitch VAFT : contournement des pubs sans coupure de flux",
    "omnishield.feat2": "Saut automatique x16 & anti-détection YouTube",
    "omnishield.feat3": "Suppression des bannières verticales Twitch (SDA)",
    "omnishield.feat4": "Normaliseur sonore & Boost de volume jusqu'à 300%",
    "omnishield.dl_btn": "Télécharger OmniShield (.zip)",
    "omnishield.guide_btn": "📖 Guide d'installation (30 sec)",
    "omnishield.modal_title": "Comment installer OmniShield",
    "omnishield.modal_sub": "Installation facile sur Google Chrome, Brave, Edge & Opera",
    "omnishield.modal_step1": "Téléchargez et extrayez le fichier <strong>OmniShield.zip</strong> dans un dossier de votre choix.",
    "omnishield.modal_step2": "Ouvrez votre navigateur et rendez-vous sur <strong>chrome://extensions/</strong> (ou <strong>edge://extensions/</strong> / <strong>brave://extensions/</strong>).",
    "omnishield.modal_step3": "Activez le bouton <strong>« Mode développeur »</strong> situé en haut à droite.",
    "omnishield.modal_step4": "Cliquez sur <strong>« Charger l'extension non empaquetée »</strong> en haut à gauche et sélectionnez le dossier extrait.",
    "omnishield.modal_ready": "🎉 C'est tout ! L'extension est active et bloque immédiatement les pubs sur YouTube et Twitch.",
    "omnishield.modal_dl_now": "Télécharger le .ZIP maintenant",
    "omnishield.modal_close": "Fermer",

    // OMNI Uninstaller Card
    "unin.tag": "Utilitaire Windows",
    "unin.status": "En développement",
    "unin.desc": "Le nettoyeur et désinstallateur radical pour votre PC. Supprimez définitivement les logiciels impossibles à désinstaller, éradiquez les résidus de clés dans le registre et gardez un Windows ultra-rapide.",
    "unin.mockup_title": "OMNI Uninstaller Pro",
    "unin.mockup_badge": "NETTOYAGE PROFOND",
    "unin.mockup_search": "⚡ Recherche d'applications & fichiers résiduels...",
    "unin.mockup_force": "FORCAGE ACTIF",
    "unin.mockup_item1_title": "Logiciel Récalcitrant Exemple",
    "unin.mockup_item1_sub": "32 clés de registre orphelines • 2.1 Go libérables",
    "unin.mockup_item1_btn": "Désinstaller & Purger",
    "unin.mockup_item2_title": "Ancien Antivirus Résiduel",
    "unin.mockup_item2_sub": "Processus bloqué en arrière-plan détecté",
    "unin.mockup_item2_btn": "Suppression Forcée",
    "unin.feat1": "Désinstallation forcée des programmes corrompus",
    "unin.feat2": "Nettoyage profond sans toucher aux fichiers système",
    "unin.feat3": "Zéro pub, zéro abonnement, légèreté absolue",
    "unin.beta_btn": "BÊTA PRIVÉE BIENTÔT DISPONIBLE",

    // Modal iOS
    "ios.title": "Installer sur iPhone & iPad",
    "ios.subtitle": "Apple iOS • Application Plein Écran",
    "ios.desc": "Sur iPhone, Apple ne permet pas de télécharger un fichier APK, mais vous pouvez installer l'application officielle directement sur votre écran d'accueil en 3 étapes :",
    "ios.step1": "Ouvrez cette page dans le navigateur <strong>Safari</strong> sur votre iPhone/iPad.",
    "ios.step2": "Appuyez sur le bouton <strong>Partager</strong> en bas de Safari (l'icône carrée avec la flèche vers le haut ⬆️).",
    "ios.step3": "Faites défiler et appuyez sur <strong>« Sur l'écran d'accueil » ➕</strong> puis validez avec <strong>Ajouter</strong>.",
    "ios.launch_btn": "Lancer l'Application sur Safari maintenant →",
    "ios.close_btn": "Fermer",

    // Footer
    "footer.tagline": "Créateur de solutions logicielles indépendantes",
    "footer.home": "Accueil",
    "footer.software": "Nos Logiciels",
    "footer.discord": "Serveur Discord"
  },

  en: {
    // Nav & General
    "nav.home": "Home",
    "nav.software": "Our Software",
    "nav.discord": "Discord",
    "nav.btn_software": "OUR SOFTWARE",
    "nav.btn_discord": "DISCORD",

    // Index - Hero
    "index.tag": "OMNI SUITE • INDEPENDENT SOFTWARE CREATIONS",
    "index.hero_title_sub": "Software excellence. No compromise.",
    "index.hero_desc": "Powerful interactive tools built for gamers and Windows users: immersive tactical companions, ultra-lightweight system utilities and zero bloat.",
    "index.cta_software": "OUR SOFTWARE",
    "index.cta_discord": "JOIN DISCORD",

    // Index - 3 Pillars
    "index.pillar1_tag": "01 // PERFORMANCE",
    "index.pillar1_title": "Native Development",
    "index.pillar1_desc": "Ultra-lightweight Windows applications with zero bloatware and minimal memory footprint.",

    "index.pillar2_tag": "02 // INDEPENDENCE",
    "index.pillar2_title": "Autonomous Creations",
    "index.pillar2_desc": "Tactical companions and system utilities crafted with passion for the community.",

    "index.pillar3_tag": "03 // SECURITY",
    "index.pillar3_title": "100% Safe & Transparent",
    "index.pillar3_desc": "No risky code injection, full compliance with game anti-cheat and user privacy.",

    // Logiciels - Header
    "software.tag": "OFFICIAL OMNI SOFTWARE CATALOG",
    "software.title": "Our Software & Tools",
    "software.desc": "Explore our independent software suite: official gaming companions, transparent in-game tools, and lightweight Windows utilities.",

    // Logiciels - Media Tabs & Preview
    "software.tab_video": "▶ Demo Video (v2)",
    "software.tab_image": "📸 HD Screenshot",
    "software.zoom_btn": "Enlarge in 2K",
    "software.video_desc": "Official presentation video with music & live preview of the transparent overlay.",
    "software.label_video": "In-Game Demonstration",
    "software.label_image": "Official 2K Screenshot",

    // DBDMapsOmni Card
    "dbd.tag": "Gaming Companion",
    "dbd.desc": "The official Dead by Daylight companion. Display all 44 official HD maps in transparent in-game overlay while playing or use the synchronized team lobby on mobile.",
    "dbd.feat1": "44 HD Maps with markings & callouts 1 to 12",
    "dbd.feat2": "Adjustable transparency & Click-through gaming mode",
    "dbd.feat3": "100% Lightweight, 0% FPS drop & EAC anti-cheat safe",
    "dbd.dl_title": "⬇ Download for your device:",
    "dbd.btn_win_sub": "In-game transparent overlay",
    "dbd.btn_apk_title": "Android (.APK)",
    "dbd.btn_apk_sub": "Download APK file",
    "dbd.btn_ios_title": "iPhone & iPad (iOS)",
    "dbd.btn_ios_sub": "Install via Safari (PWA)",
    "dbd.btn_web_title": "Launch Web App",
    "dbd.btn_web_sub": "In browser / 2nd screen",

    // OmniShield Card & Modal
    "omnishield.tab_video": "▶ Presentation Video",
    "omnishield.tag": "Web Extension • Chrome / Brave / Edge",
    "omnishield.status": "v1.7.1 Available",
    "dbd.status": "v2.2.2 Available",
    "omnishield.title": "OmniShield AdBlocker",
    "omnishield.desc": "The ultimate ad blocker for YouTube and Twitch. Instant x16 auto-skip for YouTube ads, seamless Twitch ad bypass with VAFT engine v37.0.0 (uninterrupted stream with zero blackouts), and audio booster up to 300%.",
    "omnishield.feat1": "Twitch VAFT: live stream ad bypass with zero interruption",
    "omnishield.feat2": "x16 instant auto-skip & anti-adblock bypass on YouTube",
    "omnishield.feat3": "Removal of Twitch vertical stream display ads (SDA)",
    "omnishield.feat4": "Audio volume normalizer & volume booster up to 300%",
    "omnishield.dl_btn": "Download OmniShield (.zip)",
    "omnishield.guide_btn": "📖 Install Guide (30 sec)",
    "omnishield.modal_title": "How to install OmniShield",
    "omnishield.modal_sub": "Quick install for Google Chrome, Brave, Edge & Opera",
    "omnishield.modal_step1": "Download and unzip <strong>OmniShield.zip</strong> into a folder on your computer.",
    "omnishield.modal_step2": "Open your browser and navigate to <strong>chrome://extensions/</strong> (or <strong>edge://extensions/</strong> / <strong>brave://extensions/</strong>).",
    "omnishield.modal_step3": "Toggle on the <strong>\"Developer mode\"</strong> switch in the top-right corner.",
    "omnishield.modal_step4": "Click <strong>\"Load unpacked\"</strong> in the top-left and select your extracted folder.",
    "omnishield.modal_ready": "🎉 You're done! OmniShield is live and blocking ads across YouTube and Twitch.",
    "omnishield.modal_dl_now": "Download .ZIP now",
    "omnishield.modal_close": "Close",

    // OMNI Uninstaller Card
    "unin.tag": "Windows Utility",
    "unin.status": "In Development",
    "unin.desc": "The radical cleaner and uninstaller for your PC. Permanently remove stubborn software, eliminate registry residues, and keep Windows running lightning-fast.",
    "unin.mockup_title": "OMNI Uninstaller Pro",
    "unin.mockup_badge": "DEEP SYSTEM CLEANING",
    "unin.mockup_search": "⚡ Scanning for leftover files & keys...",
    "unin.mockup_force": "FORCE REMOVAL ACTIVE",
    "unin.mockup_item1_title": "Stubborn Software Example",
    "unin.mockup_item1_sub": "32 orphan registry keys • 2.1 GB recoverable",
    "unin.mockup_item1_btn": "Uninstall & Purge",
    "unin.mockup_item2_title": "Old Antivirus Residue",
    "unin.mockup_item2_sub": "Locked background process detected",
    "unin.mockup_item2_btn": "Force Removal",
    "unin.feat1": "Forced removal of corrupted and locked programs",
    "unin.feat2": "Deep registry cleaning without touching core system files",
    "unin.feat3": "Zero ads, zero subscriptions, ultra-clean footprint",
    "unin.beta_btn": "PRIVATE BETA COMING SOON",

    // Modal iOS
    "ios.title": "Install on iPhone & iPad",
    "ios.subtitle": "Apple iOS • Fullscreen Web App",
    "ios.desc": "On iPhone, Apple does not allow direct APK downloads, but you can install the official app directly to your home screen in 3 easy steps:",
    "ios.step1": "Open this page in the <strong>Safari</strong> browser on your iPhone/iPad.",
    "ios.step2": "Tap the <strong>Share</strong> button at the bottom of Safari (the square icon with an arrow pointing up ⬆️).",
    "ios.step3": "Scroll down and tap <strong>\"Add to Home Screen\" ➕</strong>, then confirm with <strong>Add</strong>.",
    "ios.launch_btn": "Launch Application on Safari now →",
    "ios.close_btn": "Close",

    // Footer
    "footer.tagline": "Creator of independent software solutions",
    "footer.home": "Home",
    "footer.software": "Our Software",
    "footer.discord": "Discord Server"
  }
};

let currentOmniLang = localStorage.getItem('omni_lang') || 'fr';

function setLanguage(lang) {
  if (lang !== 'fr' && lang !== 'en') lang = 'fr';
  currentOmniLang = lang;
  localStorage.setItem('omni_lang', lang);
  document.documentElement.lang = lang;

  // Update all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (OMNI_TRANSLATIONS[lang] && OMNI_TRANSLATIONS[lang][key]) {
      el.innerHTML = OMNI_TRANSLATIONS[lang][key];
    }
  });

  // Update toggle buttons appearance
  const btnFr = document.getElementById('lang-btn-fr');
  const btnEn = document.getElementById('lang-btn-en');
  if (btnFr && btnEn) {
    if (lang === 'fr') {
      btnFr.className = 'px-2.5 py-1 rounded-full text-xs font-black text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_12px_rgba(168,85,247,0.6)] transition';
      btnEn.className = 'px-2.5 py-1 rounded-full text-xs font-bold text-purple-300/70 hover:text-white transition';
    } else {
      btnEn.className = 'px-2.5 py-1 rounded-full text-xs font-black text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-[0_0_12px_rgba(168,85,247,0.6)] transition';
      btnFr.className = 'px-2.5 py-1 rounded-full text-xs font-bold text-purple-300/70 hover:text-white transition';
    }
  }
}

function toggleLanguage() {
  const nextLang = currentOmniLang === 'fr' ? 'en' : 'fr';
  setLanguage(nextLang);
}

// Auto init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentOmniLang);
});
