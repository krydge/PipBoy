import './ApplicationsStyle.css'
import ApplicationsMenu from '../ApplicationsMenu/ApplicationsMenu'
import { useState } from 'react'
import NotesApp from '../NotesApp/NoteApp'
import Maps from '../Map/Maps'

function Applications() {
    const [page, setPage] = useState("Notes")
    console.log(page)
    return (
        <div className="Applications">
            {page==="Notes" &&
            <NotesApp/>
    }
    {page==="Maps" &&
            <Maps/>
    }
            <ApplicationsMenu parentCallBack={setPage} />
        </div>
    )
}

export default Applications;