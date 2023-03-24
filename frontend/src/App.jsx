import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
