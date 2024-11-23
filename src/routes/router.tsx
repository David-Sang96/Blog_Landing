import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DetailHomePage from "../features/detail/pages/DetailHomePage";
import HomePage from "../features/home/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/details",
        element: <DetailHomePage />,
      },
    ],
  },
]);
export default router;
