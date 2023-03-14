import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage} from './pages/HomePage';
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  }
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
