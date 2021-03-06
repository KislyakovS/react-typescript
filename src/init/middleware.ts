// Core
import { createLogger } from 'redux-logger';
import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action): string => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: (): string => '#1C5FAF',
    action: (): string => '#149945',
    nextState: (): string => '#A47104',
    error: (): string => '#FF0005',
  },
});

const sagaMiddleware = createSagaMiddleware();

const isDev = process.env.NODE_ENV === 'development';

const middleware: Middleware[] = [sagaMiddleware];

if (isDev) {
  middleware.push(logger);
}

export { middleware, sagaMiddleware, logger };
