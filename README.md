# QuittanceFront

Projet de de generation et de gestion de quittance de loyer (FrontEnd)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Organisation du projet

### Shared Module
Ce module contient tout les elements reutilisables comme les pipes, les directives, certains components partager par plusieurs pages

### Core Module
Ce module contient les services et modules que seront utilisés a travers toute l'application mais importés qu'une seule fois
Service: Authentification, LocaleStorage

# Recommandation Générales
    - Utiliser le fichier variables.scss pour stocker couleurs et styles repetitifs 
    - Faire toujours une demande de code review par au moins un autre dev après chaque push sur le depot git
    - Prioriser la creation et l'utilisation de composant elementaires
    - Utiliser les modules Admin pour la partie Backoffice admistrateur 
        et proprietaire pour les composants relatifs aux proprietaire s


