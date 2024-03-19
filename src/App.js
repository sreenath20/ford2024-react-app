import Layout from './components/Layout';
import Home from './components/Home'
import NoPage from './components/NoPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Demo from './components/demo/Demo';
import DisplayProducts from './components/DisplayProducts';
import AddProduct from './components/AddProduct';
import LoginForm from './components/LoginForm';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="products" element={<DisplayProducts />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="demo" element={<Demo />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
