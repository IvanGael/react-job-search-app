// App.js
import React from 'react';
import JobListings from './JobListings';
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <h1>Job Search</h1>
      <JobListings />
    </div>
  );
};

export default App;
