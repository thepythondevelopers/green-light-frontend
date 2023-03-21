import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { GoogleOAuthProvider , GoogleLogin } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <GoogleOAuthProvider clientId="181323145371-7dk789o4um7ljlhpcp8iqtbhd8ntcf4o.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
