// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Styling dependencies
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component dependencies
import App from './App';

// Redux dependencies
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
