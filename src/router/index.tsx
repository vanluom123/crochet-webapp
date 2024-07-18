import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    
    path: '/contact',
    element: <Contact />,
  }

]);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};