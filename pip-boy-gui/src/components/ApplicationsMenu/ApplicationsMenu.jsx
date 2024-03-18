import "./ApplicationMenuStyle.css"

function ApplicationsMenu(params) {
    return (
        <div className='ApplicationMenu'>
            <ul>
                <li><button onClick={()=>params.parentCallBack("Notes")}>NoteBook</button></li>
                <li><button onClick={()=>params.parentCallBack("Maps")}>Map</button></li>
                <li><button onClick={()=>params.parentCallBack("Weather")}>Weather</button></li>
                <li><button onClick={()=>params.parentCallBack("Radio")}>Radio</button></li>
            </ul>
        </div>
    )
}

export default ApplicationsMenu;