// Core
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

// Help
import { rootReducer } from './reducer';
import { rootSaga } from './saga';
import { middleware, sagaMiddleware } from './middleware';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);
