import { useState } from 'react';
import './App.css';
import Applications from './components/Applications/Applications';
import Stats from './components/Stats/Stats';
import PipMenu from './components/PipMenu/PipMenu'

function App() {
  const [page, setPage] = useState("stats")

  return (
    <div className="App">
      {page === "stats" &&
        <Stats />
      }
      {page === "apps" &&
        <Applications />
      }
      <PipMenu parentCallBack={setPage} />
    </div>
  );
}

export default App;
