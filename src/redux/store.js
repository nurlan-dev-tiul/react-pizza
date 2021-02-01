import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from './reducers/rootReducers';
import thunk from 'redux-thunk';

// тут такой код если расширения для браузера redux не установлен то используй встроенную штуку
// которая есть в redux функцию compose, а если есть то заработает window.__REDUX...
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
