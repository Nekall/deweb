# deweb|
*Web agency*

Dans le but d'apprendre **react** voici une petite application react d'un site vitrine.

Pour lancer l'application :

    $ npm install package.json
    $ npm start
    http://localhost:3000

Features disponibles :
-
- Darkmode (activé grace à la Lune ou Soleil en haut du site).
- Choix du darkmode enregistré dans le `LocalStorage`.
- Une page Home* et une page About* très sommaire.
- Une page Works* dans laquelle un systeme de routing dynamique donne accès à 3 study case.
- Site Responsive.

*ses pages sont gérées grâce à `react-router`;


_ <br/>

## J'ai une erreur !
● S'il y a des vulnaribility :

    $ npm audit fix

● Dans le cas d'un `code ELIFECYCLE`

    rm -rf node_modules && rm ./package-lock.json && npm install
