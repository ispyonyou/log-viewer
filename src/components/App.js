import React from 'react';
import Filters from './Filters'
import LogMessagesList from './LogMessagesList'

import './App.css'

function App() {
  return (
    <div>
      <h1>Omp Log Viewer</h1>
      <div>
        <div>
          <Filters />
        </div>
        <LogMessagesList />
      </div>
    </div>
  )
}

export default App