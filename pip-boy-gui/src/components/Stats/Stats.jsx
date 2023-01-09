import './StatsStyle.css';
import { useState } from 'react';
import StatsMenu from '../StatsMenu/StatsMenu';
import ToDo from '../ToDo/ToDo';
import ATM from '../ATM/ATM';

function Stats() {
    const [page, setPage] = useState("ToDo")
    console.log(page)
    return (
        <div className="StatsPage">
            {page === "ToDo" &&
                <ToDo />
            }
            {page === "ATM" &&
                <ATM />
            }
            <StatsMenu parentCallBack={setPage} />
        </div>)
}

export default Stats;