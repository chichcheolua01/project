import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CustomerLayout from "./layouts/CustomerLayout";
import CartPage from "./pages/customer/CartPage";
import PaymentPage from "./pages/customer/PaymentPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
