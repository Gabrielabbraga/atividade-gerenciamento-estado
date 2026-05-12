import { createContext, useContext, useReducer } from "react";

const TarefasContext = createContext();

const estadoInicial = {
  tarefas: [],
  filtro: "todas"
};

function reducer(state, action) {
  switch (action.type) {
    case "ADICIONAR_TAREFA":
      if (!action.titulo.trim()) {
        return state;
      }

      return {
        ...state,
        tarefas: [
          ...state.tarefas,
          {
            id: Date.now(),
            titulo: action.titulo,
            concluida: false
          }
        ]
      };

    case "ALTERAR_STATUS":
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.id
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa
        )
      };

    case "REMOVER_TAREFA":
      return {
        ...state,
        tarefas: state.tarefas.filter((tarefa) => tarefa.id !== action.id)
      };

    case "ALTERAR_FILTRO":
      return {
        ...state,
        filtro: action.filtro
      };

    case "LIMPAR_CONCLUIDAS":
      return {
        ...state,
        tarefas: state.tarefas.filter((tarefa) => !tarefa.concluida)
      };

    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  return useContext(TarefasContext);
}