import React from 'react';
import { MainRouter } from 'components/router';
import { configure } from 'mobx';
import { ThemeProvider } from '@mui/material';
import { theme } from 'common/mui';
import { ErrorBoundary } from 'components/errorBoundary';

configure({ useProxies: 'always' }); // Or "never".

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <MainRouter />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
