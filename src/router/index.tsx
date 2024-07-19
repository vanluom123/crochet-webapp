import { Route, Routes } from 'react-router-dom';


// import { createHashRouter } from 'react-router-dom';

import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import App from '../App';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;