import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartContext'; // ✅ Import here

// Set document title
document.title = 'MH (Ma Hum Tech) | Premium Tech Accessories';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider> {/* ✅ Wrap App with CartProvider here */}
      <App />
    </CartProvider>
  </StrictMode>
);
