import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./component/signUp";
import InstaLogin from "./component/InstaLogin";

export default function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <InstaLogin />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={Router} />;
}
