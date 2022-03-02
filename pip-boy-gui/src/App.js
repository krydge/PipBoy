import './App.css';
import { useEffect, useState } from 'react';
import statsimg from './fixedPip.gif'
import loadingImg from './loadingIcon.jpg'
import thumbsup from './pipBoyThumbsUp.jpg'
import axios from 'axios'
const backgroundGreen = '#334d32'
const pages = ['Status', 'S.P.E.C.I.A.L', 'Skills', 'Perks', 'General']
const statsSubPages = ['CND', 'RAD', 'EFF']
// const Stats = { 'PlayerName': "Kaydon Stubbs", 'LVL': 10, 'HPCUR': 350, 'HPMAX': 400, 'APAVAILABLE': 300, 'APMAX': 300, 'XPERNED': 147, 'XPNEEDED': 1100 }
function App() {
  const [page, setPage] = useState(pages[0])
  const [Stats, setStats] = useState('')
  const [firstload, setFirstLoad] = useState(false)
  const changePage = (e) => {
    setPage(e.target.value)
  }
  useEffect(async () => {
    let stats = await axios.get('http://localhost:5001/user/tasha/')
    console.log(stats)
    setStats(stats.data)
    const timer = setInterval(() => {
      setFirstLoad(true)
    }, 5000);
    // clearing interval
    return () => clearInterval(timer);
  }, [])
  return (
    <div className="App">
      {firstload === false &&
        <div className='LoadingScreen'>
          <h1>Welcome</h1>
          <div className='loadingScreenContent'>
            <div className='loadingScreenCompanyInfo'>
              <h2>RYDGE - TEC</h2>
              <h3>INDUSTRIES</h3>
              <img src={loadingImg}></img>
            </div>
            <div>
              <img src={thumbsup}></img>
            </div>
          </div>
          <h1>Welcome</h1>
        </div>
      }
      {firstload === true && page === pages[0] && <>
        <div className="statsmainContent">
          <div>{page}</div>
          <div className="StatsBar">
            <div className="separator">____________</div>
            <h3>LVL {Stats.LVL}</h3>
            <div className="separator">____________</div>
            <h3>HP {Stats.HPCUR + "/" + Stats.HPMAX}</h3>
            <div className="separator">____________</div>
            <h3>AP {Stats.APAVAILABLE + "/" + Stats.APMAX}</h3>
            <div className="separator">____________</div>
            <h3>XP {Stats.XPERNED + "/" + Stats.XPNEEDED}</h3><div className="separator">____________</div>
          </div>
          <div className='statsMid'>
            <div className="StatsSubPages">
              {statsSubPages?.map((subPage) =>
                <>
                  <button key={subPage}>{subPage}</button>
                </>)}
            </div>
            <div className='StatsImage'>
              <img src={statsimg}></img>
              <h2>{Stats.PlayerName + " - LEVEL" + Stats.LVL}</h2>
            </div>
          </div>
          <div className='NavBar'>
            <div className="separator">____________</div>
            {pages?.map((mainPage) =>
              <>
                <button onClick={changePage} value={mainPage} key={mainPage}>{mainPage}</button>
                <div className="separator">____________</div>
              </>)}
          </div>
        </div>
      </>
      }
      {firstload === true && page != pages[0] && <>
        <div>{page}</div>
        <div className='NavBar'>
          <div className="separator">____________</div>
          {pages?.map((mainPage) =>
            <>
              <button onClick={changePage} value={mainPage} key={mainPage}>{mainPage}</button>
              <div className="separator">____________</div>
            </>)}
        </div>
      </>}

    </div>
  );
}

export default App;
