import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { usersReducer } from "./users";
import { todosReducer } from './todos';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(
  combineReducers(
    {
      users: usersReducer,
      todos: todosReducer
    }
  ), composeWithDevTools(applyMiddleware(thunk, logger)))
