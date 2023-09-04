import "./App.css";

import { Route, Routes} from "react-router-dom";
import Home from "./components/HomePage/Home";
import Login from "./components/auth/loginPage/Login";
// import {AboutPage} from "./components/about/AboutPage";
import BlogPage from "./components/blog/BlogPage";
import NotFoundPage from "./components/notFpage/NotFoundPage";
import Contacts from "./components/contacts/Contacts";
import CardProduct from "./components/CardProduct";
import Register from "./components/auth/loginPage/Register";
// import ProductsCatalog from "./components/prodacts-catalog/ProductsCatalog";
import {Layout} from './components/layoutPage/Layout';
import SalePack from "./components/packSale/SalePack";
// import PayingPage from "./components/payingServise/PayingPage";
import PaymentPage from "./components/payingServise/PaymentPage";
import OutletProductsCatalog from "./components/outletProducts/OutletProductsCatalog";
import AboutPage from "./components/about/AboutPage";
import WishListPage from "./components/wishList/WishListPage";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>

        <Route index element={<Home />} />
        
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        {/* <Route path="catalog" element={<ProductsCatalog />} /> */}
        <Route path="catalog" element={<OutletProductsCatalog />} />
        <Route path="/product/:productId" element={<CardProduct />} />
        <Route path="/salepack" element={<SalePack />} />
        <Route path="paying" element={<PaymentPage/>}/>
        <Route path="wishlist" element={<WishListPage/>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="register" element={<Register />} />
<Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
