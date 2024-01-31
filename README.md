# API Sendmail pour Portfolio

## À propos du projet
Cette API Sendmail est conçue spécifiquement pour mon portfolio professionnel, permettant aux visiteurs de m'envoyer des messages via un formulaire de contact élégant et fonctionnel. Construite avec Express.ts et suivant le modèle MVC, elle assure la validation et l'envoi sécurisé des messages en utilisant SendGrid et reCAPTCHA pour éviter le spam.

## Caractéristiques principales
- **Validation de formulaire robuste :** Chaque soumission est minutieusement validée pour garantir que toutes les informations nécessaires sont présentes avant l'envoi.
- **Intégration de reCAPTCHA :** Protège contre le spam et les soumissions automatisées tout en restant convivial pour l'utilisateur.
- **Utilisation de SendGrid :** Fiabilité et efficacité dans la livraison des e-mails grâce à l'une des plateformes d'envoi d'e-mails les plus utilisées.

## Technologie
- **TypeScript & Express.ts :** Utilisation de TypeScript pour un développement plus sûr et plus prévisible. Express.ts offre un cadre robuste pour la construction d'applications serveur.
- **SendGrid :** Service d'envoi d'e-mails en cloud pour une gestion efficace des opérations d'envoi d'e-mails.
- **reCAPTCHA :** Service de Google qui protège contre le spam et les abus.

## Fonctionnement des routes

L'API définit des points de terminaison clairs et structurés pour la manipulation des requêtes de messagerie :

- `POST /send`: Ce point de terminaison accepte des requêtes POST contenant les données du formulaire de contact. Il s'attend à recevoir un objet JSON avec les champs `name`, `email`, `message`, et `recaptchaResponse`. Le middleware de validation s'assure que toutes les informations requises sont présentes. En cas de validation réussie, le contrôleur `sendEmail` s'occupe de l'envoi du message via SendGrid.

- `Middleware de validation`: Avant d'atteindre le contrôleur, chaque requête passe par un middleware de validation qui vérifie la présence et la validité des champs requis. Si une requête échoue à la validation, une réponse avec un code d'état 400 est renvoyée.

## Explication technique

Sous le capot, l'API utilise TypeScript pour le typage fort, ce qui améliore la maintenabilité et la robustesse du code. Express.ts, une variante de Express adaptée à TypeScript, est utilisé comme cadre pour créer l'architecture de l'API. Le modèle MVC permet une séparation claire entre la logique métier, la présentation et l'accès aux données, facilitant ainsi les évolutions futures et la maintenance du code.
