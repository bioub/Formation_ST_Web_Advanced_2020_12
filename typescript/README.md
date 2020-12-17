# Exercice TypeScript

Nous allons porter le projet `spa` en TypeScript

## Création du projet

Reprendre le code du projet `spa` (celui avec les modules ECMAScript - import/export) dans un dossier `typescript-spa`.

Créer un fichier `package.json` et installer `typescript` avec `npm` en `devDependencies`.

Générer un fichier `tsconfig.json` avec la commande `--init` du programme `tsc`

Dans le fichier `package.json` créer un script `build` qui lance simplement le programme `tsc`

Déplacer les sources (HTML/img/CSS/JS) dans un dossier `src` et renommer les fichiers en `.ts` (ne renommez pas les imports qui doivent rester en `.js`)

Dans le fichier `tsconfig.json` indiquer que les sources à builder sont dans le dossier `src` et quelle doivent builder vers le dossier `dist`

(on copiera le dossier `img`, les fichiers `css` et le fichier `index.html` manuellement pour l'instant)

Dans le fichier `tsconfig.json` indique que le format de modules doit rester en ECMAScript 2015.

Passer la `target` en `ES2016`.

## Typage

### Pages

Reprendre les fonctions associées à chaque page et remplacer le commentaire JSDoc par un type TypeScript (about, notFound...)

### Router

Dans le fichier `router.ts` créer une interface `Route` pour un objet route `{hash, render}` et déclarer la variable routes comme étant un tableau de `Route`

### Search

Dans le fichier `search.ts` créer une interface pour `filters`.
Utiliser les `Generic` pour typer les retours de `querySelector` et `querySelectorAll`, ex :

```
const links = document.querySelectorAll<HTMLAnchorElement>('main > a');
```

### Product

Dans `products.ts` transformer `fetchProducts` en fonction async.

Utiliser le site https://quicktype.io/typescript/ pour générer les interfaces à partir du retour du serveur dans un fichier `model.ts`

Exporter les interfaces à utiliser dans `products.ts` et `product-details.ts`

Typer les variables `selectedProduct` et `productsList` puis les fonctions `fetchProducts` (attention le retour est de type Promise), `createProductRow` et `applyFilters`

Typer les `querySelector` et la variable `target`


### Product Details

Dans `product-details.ts`, typer les `querySelector` et la variable `target`

