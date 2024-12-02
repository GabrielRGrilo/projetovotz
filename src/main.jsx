// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Importando o Router
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './Auth/useAuth';
import Theme from './styles/theme.js';
import GlobalStyle from './styles/global';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Router>  
      <ThemeProvider theme={Theme}>  
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Router>
    </AuthProvider>
  </StrictMode>,
);
