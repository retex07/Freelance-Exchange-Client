import { StrictMode } from 'react';
import './index.scss';
import App from './App';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
