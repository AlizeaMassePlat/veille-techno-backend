# README pour le Projet Kanban API REST

![Apperçu de l'api [User]](/Capture%20d'écran%202023-12-07%20100354.png)
![Apperçu de l'api [List]](/Capture%20d'écran%202023-12-07%20100423.png)
![Apperçu de l'api [Card]](/Capture%20d'écran%202023-12-07%20100439.png)

## Description

Ce projet est une API de tableau Kanban développée avec NestJS, utilisant PostgreSQL comme base de données, TypeORM pour la gestion des objets et Swagger pour la documentation de l'API. Elle permet de créer et de gérer des colonnes de tâches, d'ajouter, de modifier, et de supprimer des tâches dans ces colonnes via des appels API. L'API est conçue pour être robuste, sécurisée et facilement intégrable avec des front-ends comme Vue.js.

## Prérequis

Node.js
PostgreSQL
npm

## Installation

Cloner le dépôt git :

git clone [URL_DU_DEPOT]

Installer les dépendances :

```bash
$ npm install
```
Configurer la base de données :

Créer une base de données PostgreSQL et configurer les informations de connexion dans un fichier .env.

## Démarage de l'application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
L'API sera accessible à l'adresse [http://localhost:3000]. La documentation Swagger de l'API sera disponible sur [http://localhost:3000/api].

## Structure du Projet

Le projet est organisé en modules, chacun représentant un aspect distinct de l'application Kanban Board. Voici une explication de certains dossiers et fichiers clés :

- `src/` : Dossier racine du code source de l'API.
  - `[moduleName]/` : Dossier module qui représente le composant.
    - `dto/` : Data Transfer Objects (DTO) définissant la structure et la validation des données pour les opérations concernant les composants.
    - `entity/` : Entités TypeORM représentant la table dans la base de données.
    - `[moduleName].controller.ts` : Contrôleur gérant les requêtes entrantes relatives aux modules.
    - `[moduleName].module.ts` : Module NestJS regroupant les providers relatifs aux modules.
    - `[moduleName].service.ts` : Service contenant la logique métier pour les opérations sur les modules.

Chaque module est conçu pour être indépendant, ce qui facilite la maintenance et l'évolutivité de l'application.

## Directives pour les Développeur.euses

Ajout de nouvelles fonctionnalités : Créez de nouveaux modules ou services NestJS pour étendre les fonctionnalités de l'API.
Modification de la base de données : Utilisez TypeORM pour créer ou modifier les entités.
Documentation API : Mettez à jour la documentation Swagger pour refléter les changements dans l'API.

## Contribution

Pour contribuer au projet, veuillez suivre les étapes suivantes :

Créez une branche pour votre fonctionnalité ou correction de bug.
Développez et testez vos modifications en local.
Soumettez une Pull Request avec une description détaillée de vos changements.

## Support

Pour toute question ou problème, veuillez ouvrir une issue sur le dépôt du projet.
