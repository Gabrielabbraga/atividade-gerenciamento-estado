import { useNavigate } from "react-router-dom";
import { useAtendimento } from "../context/AtendimentoContext";

function Resumo() {
  const { state, dispatch } = useAtendimento();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Resumo</h2>

      <p><strong>Nome:</strong> {state.nome}</p>
      <p><strong>Contato:</strong> {state.contato}</p>
      <p><strong>Sintoma:</strong> {state.sintoma}</p>

      <button onClick={() => navigate("/")}>
        Voltar
      </button>

      <button onClick={() => dispatch({ type: "LIMPAR" })}>
        Limpar
      </button>
    </div>
  );
}

export default Resumo;