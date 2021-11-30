const initialState = {
  loading: false,
  deleting: false,
  editing: false,
  items: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "todos/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    default:
      return state;
  }
};

export const loadTodos = (userId) => {
  return async (dispatch) => {
    dispatch({ type: "todos/load/pending" });

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    const user = json.filter((todo) => todo.userId === Number(userId));

    dispatch({ type: "todos/load/fulfilled", payload: user });
  };
};
