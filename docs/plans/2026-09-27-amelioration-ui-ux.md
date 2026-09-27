# Plan d'Implémentation - Amélioration UI/UX & Accessibilité (CV Site Web)

**Date :** 2026-09-27  
**Projet :** Portfolio & CV Web — Sébastien Valton  
**Spécification source :** Audit & Design System UI/UX Pro Max (`CVSiteWeb`)  
**Stack technique :** HTML5 Sémantique, CSS Vanilla (Custom Properties, Grid/Flexbox, Media Queries), JavaScript Vanilla ES6+  

---

## 1. Vue d'Ensemble & Objectif

Ce plan définit les étapes d'amélioration UI/UX et d'accessibilité (WCAG 2.1 AA/AAA) pour le site portfolio de Sébastien Valton. Il s'appuie sur le moteur d'intelligence **UI/UX Pro Max** pour apporter une esthétique moderne, épurée et performante (Style Swiss Minimalism & Tech Dashboard Indigo/Slate), tout en résolvant les lacunes d'ergonomie mobile, de contraste et d'interactivité.

---

## 2. Contraintes Globales & Principes Design

1. **Accessibilité (WCAG 2.1 AA/AAA) :**
   - Ratios de contraste texte/fond $\ge 4.5:1$ (et $\ge 3:1$ pour les grands textes/icônes).
   - Zones d'interaction tactiles d'au moins $44 \times 44\text{px}$.
   - Indicateurs de focus clavier visibles et distincts (`:focus-visible`).
   - Prise en compte stricte de `prefers-reduced-motion`.
2. **Design System & Esthétique :**
   - Palette unifiée : Fond principal `#F5F6FB` (clair) / `#111522` (sombre), Accent indigo `#6D5CE7`, Surbrillance `#B6A9FF`, Cartes `#F0F1F7` / `#1A2032`.
   - Typographie : Structure claire avec `Manrope` (titres & corps) et `DM Mono` (métadonnées & tags).
   - Aucune dépendance externe lourde (Vanilla JS et CSS natif).
3. **Ergonomie Mobile :**
   - Menu de navigation responsive fonctionnel sur tous les écrans ($<620\text{px}$).

---

## 3. Cartographie des Fichiers

| Fichier | Statut | Responsabilité unique |
| :--- | :--- | :--- |
| `index.html` | Modification | Structure HTML5 sémantique, attributs ARIA, menu mobile burger et filtres interactifs. |
| `styles.css` | Modification | Design System global (variables CSS), typographie, contrastes, composant navigation. |
| `responsive-fixes.css` | Modification | Ajustements spécifiques aux points de rupture ($375\text{px}$, $620\text{px}$, $900\text{px}$, $1200\text{px}$). |
| `hero-panel.css` | Modification | Styles de la carte d'infrastructure Hero, animations d'entrée et contrastes sombres. |
| `script.js` | Modification | Logique du menu mobile, toggle thème optimisé, animations `IntersectionObserver` sur tous les blocs. |

---

## 4. Décomposition des Tâches Pas-à-Pas (Format TDD)

### Tâche 1 : Navigation Mobile Accessible & Menu Burger Responsive

**Fichiers concernés :**
- Modification : `index.html` (lignes 17–24)
- Modification : `styles.css`, `responsive-fixes.css`
- Modification : `script.js`

**Interfaces :**
- Produit : Bouton burger `<button class="mobile-menu-toggle" aria-expanded="false" aria-controls="main-nav">`
- Consomme : Événements `click` et touche `Escape` pour ouvrir/fermer le tiroir de navigation.

- [ ] **Étape 1 : Rédiger la vérification d'échec**
  Vérifier sur un écran $<620\text{px}$ que la navigation principale est actuellement masquée (`display: none`) sans aucun moyen de naviguer vers les sections du site.
- [ ] **Étape 2 : Implémenter le HTML & CSS pour le menu mobile**
  Ajouter le bouton de menu burger accessible avec indicateurs ARIA et le tiroir latéral/déroulant responsive avec backdrop blur.
- [ ] **Étape 3 : Implémenter la logique JS de bascule du menu**
  Gérer l'ouverture/fermeture du menu, l'attribut `aria-expanded`, le verrouillage du défilement du corps (`overflow: hidden`), et la fermeture automatique au clic sur un lien ou appui sur `Escape`.
- [ ] **Étape 4 : Vérifier la navigation mobile**
  Tester le comportement en résolution mobile ($375\text{px}$ et $620\text{px}$) et vérifier l'accessibilité au clavier et aux lecteurs d'écran.
- [ ] **Étape 5 : Commit Git**
  `git commit -m "feat(ui): ajout du menu burger responsive et accessible pour mobile"`

---

### Tâche 2 : Normalisation du Focus Clavier & Ratios de Contraste WCAG 2.1

**Fichiers concernés :**
- Modification : `styles.css`
- Modification : `responsive-fixes.css`

**Interfaces :**
- Consomme : Selector CSS `:focus-visible` universel sur tous les éléments cliquables (`<a>`, `<button>`, `[tabindex]`).
- Produit : Anneau de focus personnalisé `--color-ring: #6D5CE7` avec décalage `outline-offset: 3px`.

- [ ] **Étape 1 : Rédiger la vérification d'échec**
  Naviguer au clavier (`Tab`) sur le site et constater l'absence de contours de focus visibles ou uniformes sur certains boutons et cartes intermédiaires.
- [ ] **Étape 2 : Implémenter l'anneau de focus `:focus-visible` global**
  Ajouter des styles d'accessibilité unifiés dans `styles.css` :
  ```css
  :focus-visible {
    outline: 2px solid var(--color-ring, #6d5ce7);
    outline-offset: 3px;
    border-radius: 4px;
  }
  ```
- [ ] **Étape 3 : Corriger les ratios de contraste pour le texte secondaire et les badges**
  Ajuster les couleurs des textes secondaires (`.infra-copy small`, `.job-date`, `.tags span`, `.project-top`, `.contact-content > p`) pour garantir un ratio $\ge 4.5:1$ aussi bien en mode clair qu'en mode sombre.
- [ ] **Étape 4 : Vérifier le contraste et le comportement clavier**
  Parcourir l'ensemble de la page avec la touche `Tab` et valider les contrastes avec les outils WCAG.
- [ ] **Étape 5 : Commit Git**
  `git commit -m "fix(a11y): amélioration du contraste WCAG 2.1 et anneau de focus clavier"`

---

### Tâche 3 : Harmonisation du Design System & Variables CSS (UI/UX Pro Max)

**Fichiers concernés :**
- Modification : `styles.css`
- Modification : `hero-panel.css`

**Interfaces :**
- Consomme : Variables CSS unifiées dans `:root` et `html[data-theme="dark"]`.
- Produit : Tokens de design (Couleurs, Ombrages, Rayons de bordure, Transitions).

- [ ] **Étape 1 : Rédiger la vérification d'échec**
  Relever les valeurs de couleurs en dur et les incohérences de bordures arrondies entre les sections (ex: cartes projets à `16px`, cartes compétences à `14px`, hero art à `24px`).
- [ ] **Étape 2 : Structurer les tokens de design dans `:root`**
  ```css
  :root {
    --bg-main: #f5f6fb;
    --bg-card: #f0f1f7;
    --text-primary: #1d2538;
    --text-muted: #657087;
    --accent-primary: #6d5ce7;
    --accent-light: #b6a9ff;
    --border-color: #dce0eb;
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 20px;
    --shadow-subtle: 0 10px 30px rgba(29, 37, 56, 0.06);
    --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  ```
- [ ] **Étape 3 : Appliquer les tokens aux cartes et conteneurs**
  Reconstruire les styles des cartes compétences, projets et badges à partir des variables globales pour assurer une cohérence parfaite.
- [ ] **Étape 4 : Valider le basculement Thème Clair / Thème Sombre**
  Vérifier que tous les éléments répondent correctement au changement de thème sans rupture visuelle.
- [ ] **Étape 5 : Commit Git**
  `git commit -m "style(design-system): unification des tokens de design et des cartes"`

---

### Tâche 4 : Micro-interactions & Animations Progressives d'Apparition

**Fichiers concernés :**
- Modification : `index.html`
- Modification : `styles.css`
- Modification : `script.js`

**Interfaces :**
- Consomme : `IntersectionObserver` avec classe de révélation `.reveal-on-scroll`.
- Produit : Animations d'apparition fluides sur les projets, expériences et compétences.

- [ ] **Étape 1 : Rédiger la vérification d'échec**
  Observer que seules les cartes de la section expérience (`.job`) possèdent une animation d'apparition progressive, créant une disparité avec la grille de projets et d'expertise.
- [ ] **Étape 2 : Déployer la classe `.reveal-on-scroll` en CSS**
  Créer une animation fluide avec repli direct pour `prefers-reduced-motion` :
  ```css
  .reveal-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }
  .reveal-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  ```
- [ ] **Étape 3 : Étendre `IntersectionObserver` dans `script.js`**
  Appliquer l'observateur d'intersection sur les cartes de projets (`.project-card`), compétences (`.skill-card`) et jalons de formation (`.edu-list article`, `.cert-list > div`).
- [ ] **Étape 4 : Vérifier l'expérience visuelle et les performances**
  Faire défiler la page et vérifier la fluidité (60fps) ainsi que le respect de la préférence de mouvement réduit.
- [ ] **Étape 5 : Commit Git**
  `git commit -m "feat(ui): intégration des micro-animations au défilement et respect du mouvement réduit"`

---

### Tâche 5 : Modernisation Bento Grid des Projets & Amélioration des Diagrammes

**Fichiers concernés :**
- Modification : `index.html` (lignes 66–78)
- Modification : `styles.css`

**Interfaces :**
- Consomme : Dispositions Flexbox / Grid modulaires pour les visuels d'infrastructures et laboratoires réseau.
- Produit : Grille style Bento avec mise en valeur du projet phare (*Automated VPN Hub-and-Spoke*).

- [ ] **Étape 1 : Rédiger la vérification d'échec**
  Observer que la grille de projets manque de hiérarchie visuelle entre le projet phare (automatisation VPN Ansible) et les projets secondaires.
- [ ] **Étape 2 : Appliquer une disposition Bento Grid sur `.project-grid`**
  Faire occuper au projet principal (`.project-featured`) toute la largeur de la première ligne sur grand écran ($>900\text{px}$) avec un visuel enrichi.
- [ ] **Étape 3 : Peaufiner les schémas interactifs d'infrastructure**
  Améliorer la clarté visuelle des topologies VPN, du graphique Grafana/TIG et des fenêtres de terminal Proxmox/Bash avec des effets de survol réactifs et des légendes lisibles.
- [ ] **Étape 4 : Vérifier la mise en page responsive**
  Tester la disposition sur desktop ($1440\text{px}$), tablette ($900\text{px}$) et mobile ($375\text{px}$).
- [ ] **Étape 5 : Commit Git**
  `git commit -m "feat(bento): modernisation de la grille de projets et valorisation du projet phare"`

---

## 5. Grille d'Auto-Relecture du Plan (Self-Review Checklist)

- [x] **Couverture des exigences :** Toutes les opportunités d'amélioration ergonomique et visuelle identifiées par UI/UX Pro Max sont couvertes.
- [x] **Clarté des étapes :** Chaque tâche comporte des instructions concrètes, isolées et testables.
- [x] **Accessibilité :** Prise en compte explicite de WCAG 2.1, `:focus-visible`, du contraste et de `prefers-reduced-motion`.
- [x] **Cohérence technique :** Utilisation optimale de HTML/CSS/JS natifs en parfaite continuité avec l'existant.

---

## 6. Prochaine Étape & Choix du Mode d'Exécution

Le plan d'implémentation a été généré et enregistré dans :  
[`docs/plans/2026-09-27-amelioration-ui-ux.md`](file:///e:/test/cv-site-web/docs/plans/2026-09-27-amelioration-ui-ux.md)

Veuillez indiquer la méthode d'exécution que vous souhaitez privilégier :

- **Option 1 : Guidée par Subagents (Subagent-Driven)** — Exécution tâche par tâche avec sous-agents spécialisés pour l'implémentation et la relecture. Recommandé pour une validation très stricte.
- **Option 2 : Session Native (Native Session)** — J'exécute moi-même le plan étape par étape dans cette session principale, avec vérifications en direct et commits Git progressifs. Plus rapide et fluide.
