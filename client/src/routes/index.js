import HomePage from "../pages/HomePage/HomePage";
import InfoPage from "../pages/InfoPage/InfoPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import PromotionPage from "../pages/PromotionPage/PromotionPage";

export const PublicRoutes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/info",
    page: InfoPage,
    isShowHeader: true,
  },
  {
    path: "/promotion",
    page: PromotionPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
    isShowHeader: true,
  },
];
