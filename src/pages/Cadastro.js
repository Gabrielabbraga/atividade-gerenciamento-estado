import { useNavigate } from "react-router-dom";
import { useAtendimento } from "../context/AtendimentoContext";

function Cadastro() {
  const { state, dispatch } = useAtendimento();
  const navigate = useNavigate();

  function handleChange(e) {
    dispatch({
      type: "ATUALIZAR",
      campo: e.target.name,
      valor: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/resumo");
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Cadastro do Paciente</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome completo"
          value={state.nome}
          onChange={handleChange}
          required
        />

        <input
          name="contato"
          placeholder="Contato (telefone ou email)"
          value={state.contato}
          onChange={handleChange}
          required
        />

        <textarea
          name="sintoma"
          placeholder="Descreva o sintoma..."
          value={state.sintoma}
          onChange={handleChange}
          rows="4"
          required
        />

        <button type="submit">Avançar</button>
      </form>
    </div>
  );
}

export default Cadastro;