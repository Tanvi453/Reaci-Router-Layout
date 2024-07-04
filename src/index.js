
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './about';
import Projects from './projects';
import Team from './team';
import News from './news';
import Contact from './contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const layout = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/team',
      element: <Team />
    },
    {
      path: '/news',
      element: <News />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={layout} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
