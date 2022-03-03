import { useEffect, useState } from "react";
import statsimg from '../fixedPip.gif'
import StatsTop from "./StatsTop";

function SkillsPage(props){
    const [Stats, setStats] = useState(props.stats)
    const [page , setPage]= useState(props.page)
    
useEffect(()=>{

},[props])
    return(
        <div className="statsmainContent">
          <StatsTop page={page} Stats={Stats}></StatsTop>
          <div >
           
          </div>
        </div>
    )
}

export default SkillsPage;