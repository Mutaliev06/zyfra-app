const initialState = {
  loading: false,
  deleting: false,
  editing: false,
  items: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "users/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "users/delete/pending":
      return {
        ...state,
        deleting: true,
      };

    case "users/delete/fulfilled":
      return {
        ...state,
        deleting: false,
        items: state.items.filter((user) => user.id !== action.payload),
      };

    case "users/edit/pending":
      return {
        ...state,
        editing: true,
      };

    case "users/edit/fulfilled":
      return {
        ...state,
        editing: false,
        items: state.items.map((user) => {
          if (user.id === action.payload.userId) {
            return {
              ...user,
              ...action.payload.data,
            };
          }

          return user;
        }),
      };

    default:
      return state;
  }
};

export const loadUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "users/load/pending" });

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();

    dispatch({ type: "users/load/fulfilled", payload: json });
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: "users/delete/pending" });

    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "DELETE",
    });

    dispatch({ type: "users/delete/fulfilled", payload: userId });
  };
};

export const editUser = (userId, data) => {
  return async (dispatch) => {
    dispatch({ type: "users/edit/pending" });

    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    dispatch({ type: "users/edit/fulfilled", payload: { userId, data } });
  };
};
