import { useTarefas } from "../context/AtendimentoContext";

function Resumo() {
  const { state } = useTarefas();

  const total = state.tarefas.length;
  const concluidas = state.tarefas.filter((tarefa) => tarefa.concluida).length;
  const pendentes = total - concluidas;

  return (
    <section className="card">
      <h2>Resumo das tarefas</h2>

      <div className="resumo-grid">
        <div className="resumo-item">
          <strong>{total}</strong>
          <span>Total</span>
        </div>

        <div className="resumo-item">
          <strong>{pendentes}</strong>
          <span>Pendentes</span>
        </div>

        <div className="resumo-item">
          <strong>{concluidas}</strong>
          <span>Concluídas</span>
        </div>
      </div>

      <p className="descricao">
        Os dados são compartilhados entre as páginas através do estado global da aplicação.
      </p>
    </section>
  );
}

export default Resumo;