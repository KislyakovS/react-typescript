// Core
import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';

function* rootSaga(): SagaIterator {
  yield all([]);
}

export { rootSaga };
