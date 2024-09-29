import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Product from './pages/Product';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage />}></Route> */}
          <Route index element={<Homepage />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="products" element={<Product />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<CityList />}></Route>
            <Route path="cities" element={<CityList />}></Route>
            <Route path="countries" element={<p>Countries</p>}></Route>
            <Route path="form" element={<p>form</p>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
export default App;
