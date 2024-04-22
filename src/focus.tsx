import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './pomodoro.scss'
import Ui from './Ui.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Ui pageIndex={1}/>
  </React.StrictMode>,
)
