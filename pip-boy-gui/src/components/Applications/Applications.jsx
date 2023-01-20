import './ApplicationsStyle.css'
import ApplicationsMenu from '../ApplicationsMenu/ApplicationsMenu'
import { useState } from 'react'
import NotesApp from '../NotesApp/NoteApp'
function Applications() {
    const [page, setPage] = useState("Notes")
    console.log(page)
    return (
        <div className="Applications">
            <NotesApp/>
            <ApplicationsMenu parentCallBack={setPage} />
        </div>
    )
}

export default Applications;