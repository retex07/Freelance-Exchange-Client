import React, { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import './services/localization';

import App from './App';
import PageLoader from './components/PageLoader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

render(
  <StrictMode>
    <Suspense fallback={<PageLoader />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  </StrictMode>,
  document.getElementById('root'),
);
