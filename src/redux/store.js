
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import catsReducer from './slices/catSlice';


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})
sagaMiddleware.run(watcherSaga)

export default store;