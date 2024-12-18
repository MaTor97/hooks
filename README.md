# Exemple de Hooks React

Ce projet présente des exemples d'utilisation des hooks React dans un formulaire simple. Chaque composant montre un hook spécifique appliqué sur une base de données d'utilisateurs fictifs. Les hooks utilisés sont :

- `useState`
- `useEffect`
- `useRef`
- `useMemo`
- `useCallback`
- `useReducer`
- `useLayoutEffect`
- `useImperativeHandle`
- `useTransition`
- `useDeferredValue`
- `useId`
- `useSyncExternalStore`
- `useInsertionEffect`

## Description des fonctionnalités

Chaque composant montre l'utilisation d'un hook spécifique. Par exemple :

- **`useState`** permet de gérer l'état local.
- **`useEffect`** exécute un effet secondaire lorsqu'un état change.
- **`useRef`** garde une référence persistante à un élément DOM.
- **`useMemo`** optimise le rendu des composants en mémorisant les valeurs.
- **`useCallback`** optimise les fonctions mémorisées pour éviter les re-rendus inutiles.
- **`useReducer`** est utilisé pour gérer des états complexes.
- **`useLayoutEffect`** permet d'effectuer des effets avant le rendu.
- **`useImperativeHandle`** expose une API pour les composants enfants.
- **`useTransition`** et **`useDeferredValue`** gèrent des rendus asynchrones pour améliorer l'expérience utilisateur.
- **`useId`** génère des identifiants uniques.
- **`useSyncExternalStore`** synchronise un store externe avec React.
- **`useInsertionEffect`** est utilisé pour injecter du code dans le DOM avant tout autre effet.

## Installation

Clonez ce repository et installez les dépendances avec npm :

```
git clone git@github.com:MaTor97/hooks.git
cd hooks_demo
npm install

```


Ensuite, vous pouvez démarrer le projet avec la commande suivante :

```
npm run dev
```