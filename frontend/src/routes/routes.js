import config from "../config";

// Layouts
import HeaderOnly from "../components/HeaderOnly";

//Components
import MainContainer from "../components/MainContainer";
import ProductDetail from "../components/ProductDetail";
import ProductsPage from "../pages/ProductsPage";
import Login from "../components/Login";
import Admin from "../components/Admin";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: MainContainer, layout: HeaderOnly },
  {
    path: config.routes.productsDetail,
    component: ProductDetail,
    layout: HeaderOnly,
  },
  { path: config.routes.products, component: ProductsPage, layout: HeaderOnly },
  { path: config.routes.admin, component: Admin, layout: null },
  { path: config.routes.login, component: Login, layout: null },
];

export { publicRoutes };
