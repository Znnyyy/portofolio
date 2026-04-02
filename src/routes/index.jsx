import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Template from "../Template";
import ProjectsPage from "../pages/ProjectsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <App />, 
      },
      {
        path: "/projects",
        element: <ProjectsPage />, 
      }
    ],
  }
]);
