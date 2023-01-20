import './StatsStyle.css';
import { useState } from 'react';
import StatsMenu from '../StatsMenu/StatsMenu';
import ToDo from '../ToDo/ToDo';
import ATM from '../ATM/ATM';
import FoodTracker from '../FoodTracker/FoodTracker';

function Stats() {
    const [page, setPage] = useState("ToDo")

    return (
        <div className="StatsPage">
            {page === "ToDo" &&
                <ToDo />
            }
            {page === "ATM" &&
                <ATM />
            }
            {page === "FoodIntake" &&
                <FoodTracker />
            }
            <StatsMenu parentCallBack={setPage} />
        </div>)
}

export default Stats;