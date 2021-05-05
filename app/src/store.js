import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import rootSaga from './sagas';
import { logger } from 'redux-logger';
import Routes from './routes';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(sagaMiddleware, logger)),
    );

    sagaMiddleware.run(rootSaga);

    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default AppStore;
