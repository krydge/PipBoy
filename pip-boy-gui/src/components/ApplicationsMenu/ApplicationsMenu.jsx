function ApplicationsMenu(params) {
    return (
        <div>
            <ul>
                <li><button onClick={()=>params.parentCallBack("Notes")}>NoteBook</button></li>
            </ul>
        </div>
    )
}

export default ApplicationsMenu;