import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { OpenOrCloseProvider } from "./contexts/OpenOrCloseNavContext";
import SpinnerFullPage from "./components/SpinnerFullPage";

// these are inner pages(from outlet)
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

// these are pages
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// npm run build to get bundle size witout use lazy loading:
// dist/assets/index-84ebd240.css   31.35 kB │ gzip:   5.37 kB
// dist/assets/index-bc926243.js   515.29 kB │ gzip: 150.48 kB

// with lazy loading and suspense api (it is very important to use in SPA project)
const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// npm run build to get bundle size with use lazy loading:everything is bundle and this is good lazy
// dist/index.html                           0.45 kB │ gzip:   0.29 kB
// dist/assets/Logo-3eff0509.css             0.10 kB │ gzip:   0.10 kB
// dist/assets/Login-e1141f05.css            0.38 kB │ gzip:   0.24 kB
// dist/assets/Product-8b73fd84.css          0.50 kB │ gzip:   0.29 kB
// dist/assets/AppLayout-2952b565.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/MobileNav-e80bb5be.css        2.21 kB │ gzip:   0.80 kB
// dist/assets/index-3400f9dc.css           26.37 kB │ gzip:   4.40 kB
// dist/assets/Product.module-7a7231a7.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-058f3c05.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-5a58dc5d.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/Homepage-d77b6e7d.js          0.65 kB │ gzip:   0.40 kB
// dist/assets/Pricing-e990d85a.js           0.67 kB │ gzip:   0.42 kB
// dist/assets/Product-a87153a8.js           0.95 kB │ gzip:   0.55 kB
// dist/assets/Login-12cfa6f9.js             1.04 kB │ gzip:   0.54 kB
// dist/assets/MobileNav-3c3d164d.js         5.92 kB │ gzip:   2.42 kB
// dist/assets/AppLayout-bbed9174.js       157.01 kB │ gzip:  46.15 kB
// total is 351.15 kb until in without lazy total is 515.29 kB
// dist/assets/index-e4254583.js           351.15 kB │ gzip: 101.72 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <OpenOrCloseProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />

                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  {/* this is a deafult when i go to the app page */}
                  <Route index element={<Navigate to="cities" replace />} />
                  {/* these are the nested route.... to use it we mustly use, <outlet />.this outlet like a children prop. */}
                  <Route path="cities" element={<CityList />} />
                  {/* I use React Router params to state managment without using useState ...this is power of React Router.
          the cycle to use React Router params to State managment: 1:define the Route like 👇 2:define the Link to use this 3:read data from URl
          by using useParams() hook.
          ...this id name in below is optional you see that when you use useParams();
          this path = "name/:name" not immediatly use in nested Route ,you can use this anywhere tou like .

          soooo...This is the React Router params and very  importatn features and soo usefulness.
           */}
                  <Route path="cities/:id" element={<City />} />

                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </OpenOrCloseProvider>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
