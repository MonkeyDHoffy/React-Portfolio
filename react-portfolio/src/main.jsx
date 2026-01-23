import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18 Rendering API
import App from './App';
import './index.css'; // Import global styles including Tailwind CSS

// Pseudocode: Mount the React app into the #root element
// 1) Find the #root element in index.html
// 2) Create a root with React 18's createRoot
// 3) Render <App /> inside React.StrictMode
const rootElement = document.getElementById('root');
// TODO: Add error handling if rootElement is null (optional)
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);