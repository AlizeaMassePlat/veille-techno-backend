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

## Configuration du service PostgreSQL avec Docker Compose

Le fichier docker-compose.yml définit la configuration pour déployer un service PostgreSQL dans un environnement Docker. Voici une explication détaillée de ses composants :

Version: La version '3.7' de Docker Compose est utilisée, offrant une compatibilité et des fonctionnalités avancées.

### Services:

postgres: Définit le service PostgreSQL.

image: Utilise postgres:13, qui est une image Docker officielle de PostgreSQL version 13.

env_file: Charge les variables d'environnement depuis un fichier .env situé dans le même répertoire que le fichier Docker Compose.

container_name: Nomme le conteneur Docker en tant que my-postgres.

ports: Mappe le port 5432 du conteneur au port 5432 de l'hôte, permettant l'accès au service PostgreSQL depuis l'extérieur du conteneur.

environment: Définit les variables d'environnement spécifiques à PostgreSQL :
POSTGRES_DB: Nom de la base de données, tiré de la variable d'environnement POSTGRES_DATABASE.
POSTGRES_USER: Nom de l'utilisateur, tiré de la variable POSTGRES_USER.
POSTGRES_PASSWORD: Mot de passe de l'utilisateur, tiré de la variable POSTGRES_PASSWORD.

postgres_data:/var/lib/postgresql/data : Stocke les données de la base de données dans un volume nommé postgres_data.

volumes: postgres_data: Déclare un volume Docker nommé postgres_data, utilisé pour la persistance des données.

Cette configuration facilite le déploiement et la gestion d'une base de données PostgreSQL dans un environnement Docker, en garantissant que les données sont conservées même après que le conteneur soit arrêté ou supprimé.

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
