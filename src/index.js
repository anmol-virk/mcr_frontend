import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import RecipeDetails from './pages/recipeDetails';
import AddRecipe from './pages/addRecipe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/recipes/:id",
    element: <RecipeDetails />
  },
  {
    path: "/addRecipe",
    element: <AddRecipe />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

