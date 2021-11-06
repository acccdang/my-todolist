import React, { useReducer, useContext, createContext, Dispatch } from "react";

// Todo type 설정
interface Todo {
  id: number;
  title: string;
  done: boolean;
}
type Todos = Array<Todo>;

// Todo Reducer 초기값 설정
const initialTodos: Todos = [];

// Todo Reducer Action 설정
type Action = { type: "CREATE"; title: string } | { type: "REMOVE"; id: number };

// Todo Reducer
function todoReducer(state: Todos, action: Action) {
  switch (action.type) {
    case "CREATE":
      return [...state, { id: state.length > 0 ? state[state.length - 1].id + 1 : 1, title: action.title, done: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("unhandled action type");
  }
}

type TodoDispatch = Dispatch<Action>;
// Context
const TodoStateContext = createContext<Todos | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);

interface TodoPrivderProps {
  children: React.ReactNode;
}
export function TodoProvider({ children }: TodoPrivderProps): React.ReactElement {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>;
    </TodoStateContext.Provider>
  );
}

// state와 context를 쉽게 쓰기 위해 커스텀 훅 사용
export function useTodoState(): Todos {
  const state = useContext(TodoStateContext);
  if (!state) {
    throw new Error("Cannot find TodoProvider !");
  }
  return state;
}

export function useTodoDispatch(): TodoDispatch {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find TodoProvider !");
  }
  return dispatch;
}
