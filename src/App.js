import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <main className="app">
      <header className="cabecalho">
        <h1>App de Tarefas</h1>
        <p>Refatoração de projeto para React com gerenciamento de estado.</p>

        <nav>
          <Link to="/">Tarefas</Link>
          <Link to="/resumo">Resumo</Link>
        </nav>
      </header>

      <Outlet />
    </main>
  );
}

export default App;