import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const configureStore = (preloadedState) => {
    const middleWareEnhancer = applyMiddleware(thunkMiddleware, loggerMiddleware);

    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(middleWareEnhancer)
    );
};

export default configureStore;