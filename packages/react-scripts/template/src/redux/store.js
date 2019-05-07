import Reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

let finalCompose;
if (process.env.NODE_ENV === 'development')
  finalCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
else finalCompose = compose;

const store = createStore(Reducer, finalCompose(applyMiddleware(thunk)));

export default store;
