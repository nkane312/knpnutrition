// import React, { useState } from 'react';
import './App.css';
// import Login from './login';
import Contact from './routes/Contact';
import Home from './routes/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error404 from './Error404';
import About from './routes/About';

// function Login() {
//   // defining the initial state for the form
//   const initialState = {
//     email: "",
//     password: "",
// }
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: 'contact',
    element: <Contact />,
    errorElement: <Error404 />,
  },
  {
    path: 'about',
    element: <About />,
    errorElement: <Error404 />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
        
      </header> */}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
