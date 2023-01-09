import { useState } from 'react';
import './App.css';
import Stats from './components/Stats/Stats';

function App() {
  const [page, setPage] = useState("stats")

  return (
    <div className="App">
      {page === "stats" &&
        <Stats />
      }
    </div>
  );
}

export default App;
