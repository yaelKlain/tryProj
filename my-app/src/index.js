import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from './lesson _redux/Storeless8/Memory'
import { BrowserRouter } from 'react-router-dom'
import booksSlice from './React_Route/booksSlice';
import { store } from './Store/store';

const myStore = configureStore({
  reducer: {
    booksSlice
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        {/* <booksSlice/> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
