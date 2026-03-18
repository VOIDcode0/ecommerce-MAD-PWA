import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.testNotification = function testNotification() {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification('Test Notification', {
        body: 'This is a test message',
        icon: './images/logo.png',
      });
    });
  } else {
    console.log('Permission not granted');
  }
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(() => {
        console.log('Service Worker Registered');
      })
      .catch((error) => {
        console.log('Service Worker Registration Failed:', error);
      });
  });
}
