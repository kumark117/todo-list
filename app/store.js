import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import promise from 'redux-promise';
// import thunk from 'redux-thunk';
import reducers from './reducers';
import rootSaga from './sagas';

// Below is the setup when using redux thunk only
// const createStoreWithMiddleware = compose(applyMiddleware(promise, thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
// const store = createStoreWithMiddleware(reducers);

const composeEnhancers = (process.env.NODE_ENV === 'production') ? 
   compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
