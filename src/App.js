import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Details from './components/Details/Details';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          }
        },
        {
          path: '/topics',
          element: <Topics></Topics>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }
        },
        {
          path: '/Details/:topicId',
          element: <Details></Details>,
          loader: async ({ params }) => {
            console.log(params.topicId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
          }
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
