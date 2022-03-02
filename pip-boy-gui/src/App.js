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
    e.preventDeafault()

  }
  return (
    <div className="App">
      <div>{page}</div>
      <div className="StatsSubPages">
        {statsSubPages?.map((subPage) =>
          <>
            <button>{subPage}</button>
          </>)}
      </div>
      <div className="StatsBar">
        <h3>LVL {Stats.LVL}</h3>
        <h3>HP {Stats.HPCUR + "/" + Stats.HPMAX}</h3>
        <h3>AP {Stats.APAVAILABLE + "/" + Stats.APMAX}</h3>
        <h3>XP {Stats.XPERNED + "/" + Stats.XPNEEDED}</h3>
      </div>
      <div className='StatsImage'>
        <img src={statsimg}></img>
        <h2>{Stats.PLayerName + " - LEVEL" + Stats.LVL}</h2>
      </div>
      <div className='NavBar'>
        {pages?.map((mainPages) =>
          <>
            <button>{mainPages}</button>
          </>)}
      </div>
    </div>
  );
}

export default App;
