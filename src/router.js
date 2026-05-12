import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cadastro from "./pages/Cadastro";
import Resumo from "./pages/Resumo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Cadastro /> },
      { path: "resumo", element: <Resumo /> }
    ]
  }
]);

export default router;