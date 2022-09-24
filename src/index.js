import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import catSaga from './catSaga';
import catsReducer from './catState';


const saga = createSagaMiddleware()
const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: [saga]
})
saga.run(catSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
