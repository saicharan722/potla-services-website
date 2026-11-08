import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { IMAGES } from './assets/imageRegistry.js';

const existingIcon = document.querySelector("link[rel='icon']");
if (existingIcon) {
  existingIcon.href = IMAGES.favicon;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
