import { RouterProvider } from 'react-router-dom';


// import { createHashRouter } from 'react-router-dom';

import { createHashRouter } from "react-router-dom";
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';



// import LayoutPage from 'pages/layout';
// import ErrorPage from 'pages/errorPage';
// import HomePage from 'pages/home';
// import ShopPage from 'pages/shop';
// import { ROUTE_PATH } from 'utils/constant';
// import FreePatterns from 'pages/freePattern';
// import Blog from 'pages/blog';
// import Contact from 'pages/contact';
// import About from 'pages/about';
// import Login from 'pages/login';
// import RegisterPage from 'pages/login/Register';
// import Dashboard from 'pages/Admin/Dashboard';
// import PatternsList from 'pages/Admin/patterns';
// import Admin from 'pages/Admin';
// import UsersList from 'pages/Admin/users';
// import PostsList from 'pages/Admin/posts';
// import ProductsList from 'pages/Admin/products';
// import CategoriesList from 'pages/Admin/categories';
// import CRUPattern from 'pages/Admin/patterns/CRUPattern';
// import CRUProduct from 'pages/Admin/products/CRUProduct';
// import CRUPost from 'pages/Admin/posts/CRUPost';
// import PatternDetail from 'pages/freePattern/PatternDetail';
// import { NotFound } from 'components/Common/NotFound';
// import ProductDetail from 'pages/shop/ProductDetail';
// import SettingPage from 'pages/Admin/SettingPage';
// import PostDetail from 'pages/blog/BlogDetail';
// import CRUUser from "../pages/Admin/users/CRUUser";

export const router = (typeof window !== 'undefined') ? createHashRouter([

  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,

    //   children: [
    //     {
    //       index: true,
    //       element: <HomePage />,
    //     },
    //     {
    //       path: ROUTE_PATH.SHOP,
    //       element: <ShopPage />,
    //     },
    //     {
    //       path: ROUTE_PATH.FREEPATTERNS,
    //       element: <FreePatterns />,
    //     },
    //     {
    //       path: `${ROUTE_PATH.FREEPATTERNS}/${ROUTE_PATH.DETAIL}/:id`,
    //       element: <PatternDetail />
    //     },
    //     {
    //       path: `${ROUTE_PATH.SHOP}/${ROUTE_PATH.DETAIL}/:id`,
    //       element: <ProductDetail />
    //     },
    //     {
    //       path: ROUTE_PATH.BLOG,
    //       element: <Blog />,
    //     },
    //     {
    //       path: `${ROUTE_PATH.BLOG}/${ROUTE_PATH.DETAIL}/:id`,
    //       element: <PostDetail />
    //     },
    //     {
    //       path: ROUTE_PATH.CONTACT,
    //       element: <Contact />,
    //     },
    //     {
    //       path: ROUTE_PATH.ABOUT,
    //       element: <About />,
    //     },
    //   ],
    // },
    // {
    //   path: ROUTE_PATH.LOGIN,
    //   element: <Login />,
    // },
    // {
    //   path: ROUTE_PATH.REGISTER,
    //   element: <RegisterPage />,
    // },
    // // Admin page
    // {
    //   path: ROUTE_PATH.ADMIN,
    //   element: <Admin />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Dashboard />,
    //     },
    //     // category
    //     {
    //       path: ROUTE_PATH.ADMIN_CATEGORY,
    //       element: <CategoriesList />,
    //     },
    //     //patern
    //     {
    //       path: ROUTE_PATH.ADMIN_PATTERNS,
    //       element: <PatternsList />,
    //     },
    //     {
    //       path: `${ROUTE_PATH.ADMIN_PATTERNS}/${ROUTE_PATH.CREATE}`,
    //       element: <CRUPattern />,
    //     },
    //     {
    //       path: `${ROUTE_PATH.ADMIN_PATTERNS}/${ROUTE_PATH.DETAIL}/:id`,
    //       element: <CRUPattern />,
    //     },
    //     // user
    //     {
    //       path: ROUTE_PATH.ADMIN_USERS,
    //       element: <UsersList />,
    //     },
    //     {
    //       path: `${ROUTE_PATH.ADMIN_USERS}/${ROUTE_PATH.DETAIL}/:id`,
    //       element: <CRUUser />
    //     },
    //     // product
    //     {
    //       path: ROUTE_PATH.AMIN_PRODUCTS,
    //       element: <ProductsList />,
    //     },
    //     {
    //       path: `${ROUTE_PATH.AMIN_PRODUCTS}/${ROUTE_PATH.CREATE}`,
    //       element: <CRUProduct />,
    //     },

    //     {
    //       path: `${ROUTE_PATH.AMIN_PRODUCTS}/${ROUTE_PATH.DETAIL}/:id`,
    //       element: <CRUProduct />,
    //     },
    //     //post
    //     {
    //       path: ROUTE_PATH.ADMIN_POSTS,
    //       element: <PostsList />,
    //     },
    //     {
    //       path: `${ROUTE_PATH.ADMIN_POSTS}/${ROUTE_PATH.CREATE}`,
    //       element: < CRUPost />,
    //     },
    //     {
    //       path: `${ROUTE_PATH.ADMIN_POSTS}/${ROUTE_PATH.DETAIL}/:id`,
    //       element: < CRUPost />,
    //     },
    //     {
    //       path: ROUTE_PATH.ADMIN_SETTING,
    //       element: <SettingPage />,
    //     },
    //   ],
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]) : null;


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Router = () => {
  return router ? <RouterProvider router={router} /> : null
};