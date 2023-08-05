import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyles.js";
import router from './router/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
