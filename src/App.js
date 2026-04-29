import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <h1>Clínica Sorriso Saudável</h1>

      <nav>
        <Link to="/">Cadastro</Link>
        <span> | </span>
        <Link to="/resumo">Resumo</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default App;