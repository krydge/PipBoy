function PipMenu(params) {
    return (
        <div>
            <ul>
                <li><button onClick={()=>params.parentCallBack("stats")}>Stats</button></li>
                <li><button onClick={()=>params.parentCallBack("apps")}>Apps</button></li>
            </ul>
        </div>
    )
}

export default PipMenu;