import './App.css';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

function App() {
    return (
        <div className="container mx-auto">
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Products />}></Route>
                <Route path="/:category_id" element={<Products />}></Route>
                <Route path="/product/:product_id" element={<ProductDetail />}></Route>
                <Route path="/:cart" element={<ProductDetail />}></Route>
                <Route path="/:favourite" element={<ProductDetail />}></Route>
            </Routes>
        </div>
    );
}

export default App;
