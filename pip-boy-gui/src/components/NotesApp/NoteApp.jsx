import { useState } from 'react';
import './NotesAppStyle.css'

function NotesApp() {
    const [addNote, setAddNote] = useState(false)
    const [formData, setFormData] = useState({})
    const [notes, setNotes] = useState([])
    console.log(notes)
    const handleFormChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handlAddNote = (e) => {
        e.preventDefault()
        let nNotes = notes
        let count = 0
        let note = formData.Note

        let noteSummary = ""
        let i = 20
        if( note.length<10){
            i=note.length;
        }
        for (let x = 0; x < i; x++) {
            noteSummary = noteSummary + note[x]
        }

        nNotes.push({"key":notes.length, "title": formData.Title, "note": formData.Note, "noteSummary": noteSummary })
        setFormData({})
        setNotes(nNotes)
        setAddNote(false)

    }

    const handleCancel = (e) => {
        e.preventDefault();
        setFormData({})
        setAddNote(false)
    }
    return (
        <div className="NotesApp">
            <div className="notesList">
                {addNote === false && <>
                    <div>
                        <button onClick={() => setAddNote(true)}>Create Note</button>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Note summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notes && notes.map((item) => <tr key = {item.key}><td>{item.title}</td><td>{item.noteSummary}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                    
                </>
                }
            </div>

            {addNote &&
                <div>
                    <form><label><input type="text" name="Title" onChange={handleFormChange} value={formData.Title || ""}></input></label>
                        <label><textarea columns="30" name="Note" onChange={handleFormChange} value={formData.Note || ""}></textarea></label>
                        <button onClick={handlAddNote}>AddNote</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default NotesApp;