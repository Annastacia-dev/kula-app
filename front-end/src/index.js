import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { UserProvider } from './context/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <UserProvider>
  <App />
  </UserProvider>
  </React.StrictMode> 
  </Router>
);

