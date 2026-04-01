import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { CheckoutForm } from './components/CheckoutForm';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-lg font-semibold mb-2">Dhanalakshmi Snacks</p>
              <p className="text-gray-400">
                Fresh, Delicious & Authentic Indian Snacks
              </p>
              <p className="text-gray-400 mt-4">
                &copy; 2026 Dhanalakshmi Foods. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
        <Toaster position="top-right" />
      </Router>
    </CartProvider>
  );
}

export default App;
