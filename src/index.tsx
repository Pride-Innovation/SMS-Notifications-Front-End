import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoansContextProvider } from './context';
import { DateContextProvider } from './context/DateContext';
import { PageContextProvider } from './context/PageContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoansContextProvider>
      <PageContextProvider>
        <DateContextProvider>
          <App />
        </DateContextProvider>
      </PageContextProvider>
    </LoansContextProvider>
  </React.StrictMode>
);