import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from '../dashboard/Dashboard';

function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get('/api/health').then(res => setStatus(res.data.status === 'ok' ? 'Running': 'Not running'));
  }, []);

  return (
    <div>
      <h1>MERN TS Monorepo</h1>
      <p>Server: {status}</p>
      <Dashboard />
    </div>
  );
}

export default App;
