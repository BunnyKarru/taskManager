import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Project from './Pages/Project';
import Calendar from './Components/Calender';
import TaskSheet from './Components/TaskSheet';


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children : [
        {
          path : '',
          element:<Project/>
        },
        {
          path : '/calender',
          element:<Calendar/>
        },
        {
          path : '/tasksheet',
          element:<TaskSheet/>
        },

      ]

    }
  ]
)







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}/>

  </Provider>
    
  </React.StrictMode>
);

reportWebVitals();