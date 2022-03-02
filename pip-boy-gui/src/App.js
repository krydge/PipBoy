import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import statsimg from './fixedPip.gif'
const backgroundGreen = '#334d32'
const pages = ['Status', 'S.P.E.C.I.A.L', 'Skills', 'Perks', 'General']
const statsSubPages = ['CND', 'RAD', 'EFF']
const Stats = { 'PLayerName': "Kaydon Stubbs", 'LVL': 10, 'HPCUR': 350, 'HPMAX': 400, 'APAVAILABLE': 300, 'APMAX': 300, 'XPERNED': 147, 'XPNEEDED': 1100 }
function App() {
  const [page, setPage] = useState(pages[0])
  const changePage = (e) => {
    setPage(e.target.value)
  }
  return (
    <div className="App">
      {page === pages[0] && <>
        <div>{page}</div>
        <div className="StatsSubPages">
          {statsSubPages?.map((subPage) =>
            <>
              <button key={subPage}>{subPage}</button>
            </>)}
        </div>
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
        <div className='StatsImage'>
          <img src={statsimg}></img>
          <h2>{Stats.PLayerName + " - LEVEL" + Stats.LVL}</h2>
        </div>
        <div className='NavBar'>
        <div className="separator">____________</div>
          {pages?.map((mainPage) =>
            <>
              <button onClick={changePage} value={mainPage} key={mainPage}>{mainPage}</button>
              <div className="separator">____________</div>
            </>)}
        </div>
      </>
      }
      {page != pages[0] && <>
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
