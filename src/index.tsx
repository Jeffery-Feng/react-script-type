import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

import Layout from './layout';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./store"
import "./assets/style/reset.css"
import "./assets/style/common.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
     </Provider>
  </React.StrictMode>
);

// 性能测试
reportWebVitals(console.log);
