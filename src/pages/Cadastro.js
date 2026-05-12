import { useState } from "react";
import { useTarefas } from "../context/AtendimentoContext";

function Cadastro() {
  const [titulo, setTitulo] = useState("");
  const { state, dispatch } = useTarefas();

  const tarefasFiltradas = state.tarefas.filter((tarefa) => {
    if (state.filtro === "pendentes") {
      return !tarefa.concluida;
    }

    if (state.filtro === "concluidas") {
      return tarefa.concluida;
    }

    return true;
  });

  function adicionarTarefa(e) {
    e.preventDefault();

    dispatch({
      type: "ADICIONAR_TAREFA",
      titulo: titulo
    });

    setTitulo("");
  }

  return (
    <section className="card">
      <h2>Minhas tarefas</h2>

      <p className="descricao">
        Adicione, conclua e remova tarefas usando estado global em React.
      </p>

      <form className="formulario" onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <div className="filtros">
        <button onClick={() => dispatch({ type: "ALTERAR_FILTRO", filtro: "todas" })}>
          Todas
        </button>

        <button onClick={() => dispatch({ type: "ALTERAR_FILTRO", filtro: "pendentes" })}>
          Pendentes
        </button>

        <button onClick={() => dispatch({ type: "ALTERAR_FILTRO", filtro: "concluidas" })}>
          Concluídas
        </button>
      </div>

      <ul className="lista">
        {tarefasFiltradas.length === 0 ? (
          <li className="vazio">Nenhuma tarefa encontrada.</li>
        ) : (
          tarefasFiltradas.map((tarefa) => (
            <li key={tarefa.id} className={tarefa.concluida ? "concluida" : ""}>
              <span>{tarefa.titulo}</span>

              <div>
                <button
                  className="botao-secundario"
                  onClick={() => dispatch({ type: "ALTERAR_STATUS", id: tarefa.id })}
                >
                  {tarefa.concluida ? "Desfazer" : "Concluir"}
                </button>

                <button
                  className="botao-perigo"
                  onClick={() => dispatch({ type: "REMOVER_TAREFA", id: tarefa.id })}
                >
                  Remover
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      <button
        className="limpar"
        onClick={() => dispatch({ type: "LIMPAR_CONCLUIDAS" })}
      >
        Limpar concluídas
      </button>
    </section>
  );
}

export default Cadastro;