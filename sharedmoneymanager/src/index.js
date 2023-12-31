import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GenericErrorPage from './SharedUtilities/Errors/GenericErrorPage'
import LoginForm from './Login/LoginForm';
import Home from './Home/Home';

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <GenericErrorPage/>,
    children: [
      {
        path: "/Home",
        element: <Home/>,
      },
      {
        path: "/Login",
        element: <LoginForm/>,
      }
      
    ],

  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={mainRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
