import { useState } from 'react';
import './App.css';
import Applications from './components/Applications/Applications';
import Stats from './components/Stats/Stats';
import PipMenu from './components/PipMenu/PipMenu'

function App() {
  const [page, setPage] = useState("stats")

  return (
    <div className="App">
      <PipMenu parentCallBack={setPage} />
      {page === "stats" &&
        <Stats />
      }
      {page === "apps" &&
        <Applications />
      }
    </div>
  );
}

export default App;
