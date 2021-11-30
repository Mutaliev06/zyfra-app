import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import { store } from './redux/configureStore';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <div className="container">
          <App />
        </div>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
