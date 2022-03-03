import { useEffect, useState } from "react";
import statsimg from '../fixedPip.gif'
import StatsTop from "./StatsTop";

function Status(props){
    const [Stats, setStats] = useState(props.stats)
    const [page , setPage]= useState(props.page)
    const statsSubPages = ['CND', 'RAD', 'EFF']
useEffect(()=>{

},[props])
    return(
        <div className="statsmainContent">
          <StatsTop page={page} Stats={Stats}></StatsTop>
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
          
        </div>
    )
}

export default Status;