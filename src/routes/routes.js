import { routes } from "../constants/routes";
import { SearchPage } from "../feature/home/components";
import ShopPage from "../pages/shop";
import { Cart } from "../feature/shop/components";
import HomePage from "../pages/home";
import AdminPage from "../pages/adminPage";
import Login from "../pages/login";
import Register from "../pages/register";

export const publicRoutes = [
  { path: routes.HOME, element: HomePage },
  { path: routes.SHOP, element: ShopPage },
  { path: routes.CART, element: Cart },
  { path: routes.SEARCH, element: SearchPage },
  { path: routes.LOGIN, element: Login },
  { path: routes.REGISTER, element: Register },
];

export const privateRoutes = [
  {path: routes.ADMIN, element: AdminPage},
];
