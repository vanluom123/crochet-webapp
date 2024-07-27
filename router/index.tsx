import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";


// import { createHashRouter } from 'react-router-dom';


// export const router =  createHashRouter([

//   {
//     path: '/',
//     element: <App />,
//     children:[
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: "/",
//         element: <Home />,
//       }
//     ]
//   }
// ]) ;

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
