# React + Vite

In this project i Use this library:

    -React-Router : I use React-Router to make a single page appplication (SPA) to get the best user exprience and flunecy application

Hooks i used in this project:

    -UseState() / useEffet() / useRef() / useMemo() / useCallBack() / Custum hooks (useGeoLocation() and useUrlPosition())

I also use Context Api to get access some state instead of nesting prob in component , and this is so important feature in this project . i create 3 context in this project (citiesContext , FakeAuthContext , OpenorCLoseNavBarContext)

-- this project haven't component that take a lot of time to render and make our applicatio n laggy ,but also i think about the performance optimization, and i use memo for some components and useMemo() to memoize the some values and useCallBack() to memoize the some function

-- I also use the Fake Api and i create that from json-server and use it in project and this is very interesting.

-- Also i used Css modules , to styled the components .

hint: To start and see the project ,first install in terminal : npm i , secend : npm run server (to use fake api) , third : npm run dev







This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
