// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming your main component is named App

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* Render MyComponent here if you want it at the root level */}
  </React.StrictMode>,
  document.getElementById('root')
);
