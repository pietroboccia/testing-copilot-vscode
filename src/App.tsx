import React from 'react';
import './App.css';
import ApiTable from './ApiTable';
import UserDetail from './UserDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/" element={<ApiTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;