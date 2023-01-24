import './StatsMenuStyle.css'
function StatsMenu(params) {
    return (
        <div className='StatsMenu'>
            <ul>
                <li><button onClick={()=>params.parentCallBack("ToDo")}>To Do</button></li>
                <li><button onClick={()=>params.parentCallBack("FoodIntake")}>Food Intake</button></li>
                <li><button onClick={()=>params.parentCallBack("ATM")}>ATM</button></li>
                <li><button onClick={()=>params.parentCallBack("Journal")}>Journal</button></li>
            </ul>
        </div>
    )
}

export default StatsMenu;