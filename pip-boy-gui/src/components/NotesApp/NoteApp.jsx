import { useState } from 'react';
import './NotesAppStyle.css'

function NotesApp() {
    const [addNote, setAddNote] = useState(false)
    const [formData, setFormData] = useState({})
    const [notes, setNotes] = useState([])
    const [eNote, setENote] = useState({})
    const [editNote, setEditNote] = useState(false)
    
    const handleFormChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleEditFormChange = (e) => {
        e.preventDefault();
        setENote({ ...eNote, [e.target.name]: e.target.value })
    }
    const handlAddNote = (e) => {
        e.preventDefault()
        let nNotes = notes
        let count = 0
        let note = formData.Note

        let noteSummary = ""
        let i = 20
        if (note.length < 10) {
            i = note.length;
        }
        for (let x = 0; x < i; x++) {
            if (note[x] == NaN) {
                noteSummary = noteSummary + " "
            }
            else {

                noteSummary = noteSummary + note[x]
            }
        }

        nNotes.push({ "key": notes.length, "title": formData.Title, "note": formData.Note, "noteSummary": noteSummary })
        setFormData({})
        setNotes(nNotes)
        setAddNote(false)

    }
    const handlAddENote = (e) => {
        e.preventDefault()
        let holder = []
        let snote = eNote.note
        let noteSummary = ""
        let i = 10
        if (snote.length < 10) {
            i = snote.length;
        }
        for (let x = 0; x < i; x++) {
            if (snote[x] === NaN) {
                noteSummary = noteSummary + " "
            }
            else {
                noteSummary = noteSummary + snote[x]
            }
        }

        notes.forEach((note)=>{
          
            if(note.key == eNote.key){
                console.log("is match")
                holder.push({ "key": note.key, "title": eNote.title, "note": eNote.note, "noteSummary": noteSummary })
            }
            else{
                console.log("no match")
                holder.push({ "key": note.key, "title": note.title, "note": note.note, "noteSummary": note.noteSummary })
            }
        })
        console.log(holder)
        setENote({})
        setNotes(holder)
        setEditNote(false)

    }
    const handleCancel = (e) => {
        e.preventDefault();
        setFormData({})
        setAddNote(false)
        setEditNote(false)
        setENote({})
    }
    const handleEdit = (e) => {
        e.preventDefault();
        const key = e.target.name
        let dataForm = {}
        notes.forEach((note) => {
            if (note.key == key)
                dataForm = note
        })
        setENote(dataForm)
        setEditNote(true)
    }
    const handleDelete = (e) => {
        e.preventDefault()
        const key = e.target.name
        let filteredArray = []

        notes.forEach((note) => {
            if (note.key != key) {
                filteredArray.push(note)
            }
        })

        setNotes(filteredArray)
    }
    return (
        <div className="NotesApp">
            <div className="notesList">
                {addNote === false &&editNote === false && <>
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
                                {notes && notes.map((item) => <tr key={item.key}><td>{item.title}</td><td>{item.noteSummary}</td><td><button name={item.key} onClick={handleEdit}>Edit/View</button></td><td><button name={item.key} onClick={handleDelete}>Delete</button></td></tr>)}
                            </tbody>
                        </table>
                    </div>

                </>
                }
            </div>

            {addNote &&
                <div>
                    <form>
                        <label>Title<input type="text" name="Title" onChange={handleFormChange} value={formData.Title || ""}></input></label>
                        <label>Note<textarea columns="30" name="Note" onChange={handleFormChange} value={formData.Note || ""}></textarea></label>
                        <button onClick={handlAddNote}>AddNote</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            }
            {editNote &&
                <div>
                    <form>
                        <label>Title
                            <input type="text" name="title" onChange={handleEditFormChange} value={eNote.title } ></input>
                            </label>
                        <label>Note
                            <textarea columns="30" name="note" onChange={handleEditFormChange} value={eNote.note}></textarea>
                            </label>
                        <button onClick={handlAddENote}>AddNote</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default NotesApp;