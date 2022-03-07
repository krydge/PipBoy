import './App.css';
import { useEffect, useState } from 'react';
import LoadingPage from './pages/loadingPage';
import axios from 'axios'
import StatusPage from './pages/StatusPage';
import SpecialPage from './pages/SPECIALPage';
import SkillsPage from './pages/SkillsPage';
const backgroundGreen = '#334d32'
const pages = ['Status', 'S.P.E.C.I.A.L', 'Skills', 'Inventory', 'General']

// const Stats = { 'PlayerName': "Kaydon Stubbs", 'LVL': 10, 'HPCUR': 350, 'HPMAX': 400, 'APAVAILABLE': 300, 'APMAX': 300, 'XPERNED': 147, 'XPNEEDED': 1100 }


function App() {
  const [page, setPage] = useState(pages[0])
  const [Stats, setStats] = useState('')
  const [firstload, setFirstLoad] = useState(false)
  const changePage = (e) => {
    setPage(e.target.value)
  }
  useEffect(async () => {
    let stats = await axios.get('http://localhost:5001/user/Tasha/')
    console.log(stats)
    setStats(stats.data)
    const timer = setInterval(() => {
      setFirstLoad(true)
    }, 3000);
    // clearing interval
    return () => clearInterval(timer);
  }, [])
  return (
    <div className="App">
      {firstload === false &&
        <LoadingPage></LoadingPage>
      }
      {firstload === true && page === pages[0] &&
        <>
          <StatusPage stats={Stats} page={page}></StatusPage>
        </>
      }
      {firstload === true && page === pages[1] &&
        <>
          <SpecialPage stats={Stats} page={page}></SpecialPage>
        </>
      }
      {firstload === true && page === pages[2] &&
        <>
          <SkillsPage stats={Stats} page={page}></SkillsPage>
        </>
      }
            {firstload === true && page === pages[3] &&
        <>
          <SkillsPage stats={Stats} page={page}></SkillsPage>
        </>
      }
            {firstload === true && page === pages[4] &&
        <>
          <SkillsPage stats={Stats} page={page}></SkillsPage>
        </>
      }

      <div className='NavBar'>
        <div className="separator">____________</div>
        {pages?.map((mainPage) =>
          <>
            <button onClick={changePage} value={mainPage} key={mainPage}>{mainPage}</button>
            <div className="separator">____________</div>
          </>)}
      </div>

    </div>
  );
}

export default App;
