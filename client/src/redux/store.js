import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
//import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga'
const sagaMiddleWare = createSagaMiddleware()

const middleware = [sagaMiddleWare];

// switch logger from dev to production 
// if dev is development push logger to array
if(process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export default {store, persistor};



