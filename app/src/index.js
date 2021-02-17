// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Styling dependencies
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component dependencies
import App from './App';

// Redux dependencies
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import thunk from 'redux-thunk';
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(username), logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
