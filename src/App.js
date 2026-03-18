import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const placeOrder = () => {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      navigator.serviceWorker.ready.then((sw) => {
        sw.sync
          .register('sync-orders')
          .then(() => {
            console.log('Order saved for sync');
          })
          .catch((error) => {
            console.log('Sync registration failed:', error);
          });
      });
    } else {
      console.log('Sync not supported');
    }
  };

  const enableNotifications = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notifications allowed');
        }
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={enableNotifications}>Enable Notifications</button>
        <button onClick={placeOrder}>Place Order</button>
      </div>
      <Home />
    </div>
  );
}

export default App;
