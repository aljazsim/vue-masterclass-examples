# Giphy Explorer

Giphy Explorer is a [Vue.js](https://vuejs.org/) application showcasing basic elements of the framework. It allows the users to explore giphs offered by the [giphy.com](https://giphy.com/)

![Giphy Explorer](./giphy-explorer.gif)

## Running the application

1. ensure you have [Node.js](https://nodejs.org/en/) installed
2. clone the repo: `git clone https://github.com/aljazsim/vue-masterclass-examples.git`
3. go to the source directory: `cd ./giphy-explorer/Source/giphy-explorer`
4. set the Giphy api key
    1. register for a developer account at [https://developers.giphy.com/](https://developers.giphy.com/)
    2. create an app
    3. copy Giphy API key
    4. set the key in `giphy-explrer/Source/giphy-explorer/.env` (setting `VUE_APP_GIPHY_API_KEY`)
5. install dependencies: `npm install`
6. run development server: `npm run serve`
7. open a web browser and go to [http://localhost:8080/](http://localhost:8080/)

## Libraries used

Some of the libraries being used in Giphy Explorer

-   [Vue.js](https://vuejs.org/) (progressive JavaScript framework for developing single page applications),
-   [axios](https://axios-http.com/) (promise based HTTP JavaScript client),
-   [qs](github.com/ljharb/qs) (query string parsing library),
-   [Bootstrap](https://getbootstrap.com/) (responsive web user interface framework),
-   [Humps](https://github.com/domchristie/humps) (framework for converting JavaScript objects with underscore-case property naming notation to camel-case and back),
-   [Inversify Props](https://github.com/CKGrafico/inversify-props) (dependency injection framework for JavaScript),
-   [rxjs](https://rxjs.dev/) (reactive extensions for JavaScript),
-   [Vue Material Design Icon Components](https://www.npmjs.com/package/vue-material-design-icons) (Vue.js wrappers for Material Design Icons),
-   [vuex](https://vuex.vuejs.org/) (Vue.js state management library),
-   [Vue Router](https://router.vuejs.org/) (Vue.js routing library),
