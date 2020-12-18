# Exercice Node

Nous allons créer un API REST pour remplacer la partie Todo de JSONPlaceholder

Tout l'exercice se fait dans le même fichier.

Tester votre code avec Postman

## Stockage des données

Les données seront stockées dans un tableau à ce stade :

```
const todos = [
  {
    id: 1,
    title: 'Acheter du pain',
    completed: false,
  },
  {
    id: 2,
    title: 'Introduire Express',
    completed: true,
  }
];
```

## Génération du prochain id

Ecrire une fonction `nextId()`, qui retourne l'id le plus grand du tableau todos que vous incrémenterez de 1.

Vous pouvez l'écrire dans un style impératif, ou bien si vous souhaitez vous risquer à la programmation fonctionnelle, en utilisant la méthode `reduce` des tableaux :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce

## Créer un API REST

Créer un fichier `package.json`

Installer express : `npm i express`

Avec express créer les routes suivantes :

- `GET /api/todos`
- `GET /api/todos/:todoId`
- `POST /api/todos`
- `DELETE /api/todos/:todoId`
- `PUT /api/todos/:todoId`
- `PATCH /api/todos/:todoId`

## GET /api/todos

Devra retourner dans la réponse HTTP le tableau complet en JSON

Status code : `200` (par défaut dans express)

## GET /api/todos/:todoId

Devra retourner dans la réponse HTTP la todo dont l'id est reçu en paramètre en JSON

Status code : `200`

Si la todo n'existe pas retourner dans la réponse HTTP en JSON : `{"msg": "Todo not found"}`

Status code : `404`

ATTENTION `req.params.todoId` est de type `string` et l'id de la todo de type `number`

## POST /api/todos

Recevra en entrée une todo au format : `{"title": "Acheter du lait", "completed": false}`, devra parser cette entrée avec `body-parser` (`express.json()`);

Ajouter une clé `id` générée à partir de la méthode `nextId()` et ajouter la todo au tableau

Devra retourner dans la réponse HTTP la todo avec son `id` généré

Status code : `201`

## DELETE /api/todos/:todoId

Devra retourner dans la réponse HTTP la todo dont l'id est reçu en paramètre en JSON

Devra supprimer la todo du tableau (avec les méthodes `filter` ou `splice` du type Array)

Status code : `200`

Si la todo n'existe pas retourner dans la réponse HTTP en JSON : `{"msg": "Todo not found"}`

Status code : `404`


## PUT /api/todos/:todoId

Recevra en entrée une todo au format : `{"title": "Acheter du lait", "completed": false}`, ou `{"title": "Acheter du lait", "completed": false, id: 123}`, devra parser cette entrée avec `body-parser`

Devra retourner dans la réponse HTTP la todo dont l'id est reçu en paramètre en JSON

Devra remplacer la todo du tableau

Status code : `200`

Si la todo n'existe pas retourner dans la réponse HTTP en JSON : `{"msg": "Todo not found"}`

Status code : `404`


## PATCH /api/todos/:todoId

Recevra en entrée une todo au format : `{"completed": false}`, ou `{"title": "Acheter du lait", id: 123}`, devra parser cette entrée avec `body-parser` 

Devra fusionner les clés de la todo reçu en entrée avec celle de la todo du tableau (dont l'id correspond à celui de l'URL)

Devra répondre en JSON l'objet todo fusionné

Status code : `200`

Si la todo n'existe pas retourner dans la réponse HTTP en JSON : `{"msg": "Todo not found"}`

Status code : `404`