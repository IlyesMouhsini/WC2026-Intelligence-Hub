# WC2026 Hub

Plateforme de data intelligence sur la Coupe du Monde 2026 : statistiques, résultats en direct et storytelling autour du tournoi, construite avec **SvelteKit**.

Ce projet est le front-end de [WC26 Pronostics API](https://github.com/TonPseudo/wc26-pronostics-api), une API REST développée en Symfony qui récupére les scores des matchs de la coupe du monde 2026 qui gèrera des pronostics et un classement communautaire. Les deux projets forment un écosystème connecté : WC2026 Hub consomme cette API pour afficher en direct les rencontres et leurs scores.

## Stack technique

- **SvelteKit** — framework front-end
- **Tailwind CSS v4** — mise en forme, thème personnalisé via `@theme`
- **D3.js** / **Chart.js** — visualisations de données
- **Lucide Svelte** — icônes
- **Axios** — appels HTTP vers l'API Symfony
- **Svelte Stores** — gestion d'état partagé

## Identité visuelle

Direction « panneau de score de stade » : fond bleu nuit profond, accents doré (trophée) et vert (pelouse), typographie condensée `Big Shoulders Display` pour les titres, `IBM Plex Mono` pour les données chiffrées. Élément signature : un bandeau ticker défilant façon panneau d'affichage, sous la navbar, qui présente les chiffres clés du tournoi.

## Fonctionnalités

- Page d'accueil avec ticker de statistiques du tournoi et mise en avant des chiffres clés (équipes, pays hôtes, matchs)
- Page **Statistiques** : liste de toutes les rencontres du Mondial 2026, synchronisées en direct depuis [WC26 Pronostics API](https://github.com/TonPseudo/wc26-pronostics-api), avec scores, statuts (à venir / en direct / terminé) et phase de compétition
- Traduction d'affichage des noms d'équipes en français, indépendante des données sources
- Design responsive, sombre, cohérent sur l'ensemble du site

## Connexion à l'API back-end

Ce projet consomme l'API REST de [WC26 Pronostics API](https://github.com/TonPseudo/wc26-pronostics-api) (Symfony + API Platform), elle-même alimentée par une intégration avec l'API externe [football-data.org](https://www.football-data.org/).

L'URL de l'API est définie via une variable d'environnement publique, dans `.env` à la racine du projet :

```
PUBLIC_API_URL=http://127.0.0.1:8000/api
```

Les appels sont centralisés dans un client Axios (`src/lib/api/client.js`), réutilisé par les différentes fonctions de récupération de données (`src/lib/api/rencontres.js`).

## Installation locale

### Prérequis

- Node.js et npm
- [WC26 Pronostics API](https://github.com/TonPseudo/wc26-pronostics-api) démarrée en local (pour que les pages de statistiques affichent des données)

### Étapes

```bash
git clone https://github.com/IlyesMouhsini/WC2026-Intelligence-Hub.git
cd WC2026-Intelligence-Hub
npm install
```

Créer un fichier `.env` à la racine avec l'URL de l'API back-end :

```
PUBLIC_API_URL=http://127.0.0.1:8000/api
```

Lancer le serveur de développement :

```bash
npm run dev
```

Le site est alors accessible sur `http://localhost:5173`.

> Pour que les données s'affichent, le projet [WC26 Back End API](https://github.com/IlyesMouhsini/WC2026-IH-back-end-api.git) doit être démarré en parallèle (`symfony server:start`), avec sa base de données synchronisée (`app:sync-equipes` puis `app:sync-rencontres`).

## Structure du projet

```
src/
├── lib/
│   ├── api/            → client Axios et fonctions d'appel à l'API Symfony
│   ├── components/      → Navbar, Hero, Ticker, MatchCard...
│   └── data/            → tables de correspondance (ex. traduction des noms de pays)
├── routes/
│   ├── +page.svelte     → page d'accueil
│   └── stats/            → liste des rencontres du tournoi
└── app.css              → thème Tailwind v4 (@theme), polices, utilitaires
```

## Roadmap

- [x] Scaffolding SvelteKit + Tailwind v4, identité visuelle
- [x] Page d'accueil (hero, ticker de statistiques)
- [x] Page Statistiques connectée à l'API back-end, rencontres réelles du tournoi
- [x] Traduction d'affichage des noms d'équipes
- [ ] Page Pronostics (connexion utilisateur, saisie des pronostics)
- [ ] Page Comparateur (comparaison d'équipes/joueurs)
- [ ] Page Récits (storytelling autour du tournoi)
- [ ] Visualisations D3.js / Chart.js sur les statistiques

## Auteur

Ilyès Mouhsini - étudiant BUT Informatique, IUT de Vélizy-Rambouillet (UVSQ)
