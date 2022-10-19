import './index.scss';
import "./services/localization";

import { StrictMode } from 'react';
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
