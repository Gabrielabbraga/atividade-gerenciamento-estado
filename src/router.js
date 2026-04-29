import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cadastro from "./pages/Cadastro";
import Resumo from "./pages/Resumo";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Cadastro />} />
          <Route path="resumo" element={<Resumo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}