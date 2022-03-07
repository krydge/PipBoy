import { useEffect, useState } from "react";
import statsimg from '../fixedPip.gif'
import StatsTop from "./StatsTop";
import '../App.css';

function StatusPage(props) {
  const [Stats, setStats] = useState(props.stats)
  const [page, setPage] = useState(props.page)
  const statsSubPages = ['CND', 'RAD', 'EFF']
  const [SubPage, setSubPage] = useState(statsSubPages[0])
  const selectSubPage=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
    setSubPage(e.target.value)
  }
  useEffect(() => {

  }, [props])
  return (
    <div className="statsmainContent">
      <StatsTop page={page} Stats={Stats}></StatsTop>
      <div className='statsMid'>
        <div className="StatsSubPages">
          {statsSubPages?.map((subPage) =>
            <>
              {subPage === SubPage ?
                <button key={subPage} style={{backgroundColor:'#527a50'}}>{subPage}</button> :
                  <button key={subPage} value={subPage} onClick={selectSubPage}>{subPage}</button>
                
              }
            </>)}
        </div>
        <div className='StatsImage'>
          <img src={statsimg}></img>
          <h2>{Stats.PlayerName + " - LEVEL" + Stats.LVL}</h2>
        </div>
      </div>

    </div>
  )
}

export default StatusPage;