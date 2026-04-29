import { createContext, useContext, useReducer } from "react";

const AtendimentoContext = createContext();

const estadoInicial = {
  nome: "",
  contato: "",
  sintoma: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "ATUALIZAR":
      return {
        ...state,
        [action.campo]: action.valor
      };
    case "LIMPAR":
      return estadoInicial;
    default:
      return state;
  }
}

export function AtendimentoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <AtendimentoContext.Provider value={{ state, dispatch }}>
      {children}
    </AtendimentoContext.Provider>
  );
}

export function useAtendimento() {
  return useContext(AtendimentoContext);
}