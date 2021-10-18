// Core
import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

type AppState = ReturnType<typeof rootReducer>;

export { rootReducer };
export type { AppState };
