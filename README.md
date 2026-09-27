# Sébastien Valton — Portfolio & CV Web

> Administrateur Systèmes, Réseaux & Sécurité · NetDevOps · Support N1-N2

[![Thème](https://img.shields.io/badge/Design-Swiss%20Minimalism%20%26%20Dashboard-6d5ce7)](#)
[![Accessibilité](https://img.shields.io/badge/WCAG-2.1%20AA%2FAAA-8bd0a4)](#)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%2F%20CSS3%20%2F%20JS-73c5db)](#)

Ce dépôt contient le code source du site portfolio et CV en ligne de **Sébastien Valton**. Conçu avec une approche moderne, épurée et performante (inspirée du Swiss Minimalism et du Design System *UI/UX Pro Max*), le site présente son parcours professionnel, ses compétences d'infrastructures et ses projets de laboratoires (NetDevOps, Ansible, FortiGate, Supervision TIG, Proxmox).

---

## 🌟 Fonctionnalités & Ergonomie

- **🎨 Design System & Palette Indigo/Slate :**
  - Thème Clair & Thème Sombre dynamique avec mémorisation et détection automatique des préférences système (`prefers-color-scheme`).
  - Cartes et composants structurés avec variables CSS globales (`Custom Properties`).

- **📱 Navigation Mobile Responsive & Accessible :**
  - Tiroir de navigation burger responsive avec effet de flou d'arrière-plan (*backdrop blur*).
  - Accessibilité WCAG 2.1 AA/AAA : indicateurs de focus clavier distincts (`:focus-visible`), cibles tactiles de $44 \times 44\text{px}$ minimum et ratios de contraste stricts.

- **⚡ Bento Grid & Visualisation d'Infrastructures :**
  - Mise en valeur Bento Grid du projet phare : *Automatisation VPN Hub-and-Spoke avec Ansible & FortiGate*.
  - Visualisations schématiques interactives des topologies réseau (Supervision TIG Grafana, Terminal Bash Proxmox, Cluster HA FGCP, Segmentation VLAN).

- **✨ Animations & Micro-interactions :**
  - Animations fluides à l'apparition au défilement optimisées via `IntersectionObserver`.
  - Respect strict de la préférence utilisateur pour les mouvements réduits (`prefers-reduced-motion`).

---

## 🛠️ Stack Technique

- **Frontend :** HTML5 Sémantique, CSS Vanilla (Grid, Flexbox, Custom Properties), JavaScript Vanilla (ES6+)
- **Systèmes & Réseaux valorisés :** Active Directory, Microsoft 365, MECM, JAMF, Linux, Windows Server, Fortinet (FortiGate, SD-WAN, IPsec, HA), Cisco, Proxmox, Docker, Ansible, Supervision TIG (Telegraf, InfluxDB, Grafana)

---

## 📂 Structure du Dépôt

```text
.
├── index.html           # Structure HTML5 sémantique du portfolio
├── styles.css           # Design system global, variables CSS et styles de base
├── responsive-fixes.css # Adaptations responsive pour mobiles et tablettes
├── hero-panel.css       # Carte d'infrastructure interactive de l'en-tête
├── script.js            # Menu burger mobile, bascule de thème et IntersectionObserver
├── assets/              # Fichiers CV téléchargeables et médias
└── README.md            # Documentation du projet
```

---

## 🚀 Utilisation Locale

Aucun serveur d'application ni compilation requis. Il suffit d'ouvrir `index.html` dans n'importe quel navigateur web moderne ou de lancer un serveur web statique local :

```bash
# Exemple avec Python
python -m http.server 8000

# Ou avec npx serve
npx serve .
```

Puis ouvrir `http://localhost:8000` dans votre navigateur.

---

## 👤 Contact

- **Email :** [sebastien.valton@protonmail.com](mailto:sebastien.valton@protonmail.com)
- **LinkedIn :** [linkedin.com/in/svalton](https://www.linkedin.com/in/svalton/)
- **GitHub :** [github.com/Chac93](https://github.com/Chac93)
- **TryHackMe :** [tryhackme.com/p/Chac93](https://tryhackme.com/p/Chac93)

---

*Construit avec soin · 2026*
