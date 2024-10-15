import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails"; // Add this import statement

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
