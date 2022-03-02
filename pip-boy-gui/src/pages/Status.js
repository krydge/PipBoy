import { useState } from "react";
import statsimg from '../fixedPip.gif'

function Status(props){
    const [Stats, setStats] = useState(props.stats)
    const [page , setPage]= useState(props.page)
    const statsSubPages = ['CND', 'RAD', 'EFF']

    return(
        <div className="statsmainContent">
          <div className='statsTop'>
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
          
        </div>
    )
}

export default Status;