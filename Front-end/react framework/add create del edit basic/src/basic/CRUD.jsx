
import { useState } from 'react'


const CRUD = () => {



    const [note, setNote] = useState({
        text: '', auther: ''
    });

    const noteTarget = (event) => {
        const { name, value } = event.target
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const [noteArr, setNoteArr] = useState([])

    const noteAdd = () => {

        const newNote = { ...note }
        newNote.id = Date.now().toString()
        setNoteArr((prev) => {
            return [...prev, newNote]
        })

        setNote(
            {
                text: '', auther: ''
            }
        )

    }

    const noteList = noteArr.map((note) => {
        return (
            <div className='list' key={note.id}>
                <p>Text: {note.text}</p>
                <p>Number:{note.auther}</p>
                <div className="wrap-btn">
                    <button onClick={() => { del(note.id) }}>Delete</button>
                    <button onClick={() => { setEdit(note) }}>Edit</button>
                </div>
            </div>
        )
    })

    const del = (note) => {
        setNoteArr((prev) => {
            return prev.filter(e => e.id !== note)
        })
    }

    const [edit, setEdit] = useState(null)

    const editNoteChange = (event) => {
        const { name, value } = event.target;
        setEdit((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    const updateNote = (event) => {
        event.preventDefault();
        setNoteArr((prev) => {
            return prev.map((theNote) => {
                if (theNote.id !== edit.id) return theNote
                return edit

            })
        })
        setEdit(null)
    }



    let editNotElement = null;
    if (edit) {
        editNotElement = (
            <div className="">
                <div className="form">
                    <h3>Text</h3>
                    <input type="text" name="text" value={edit.text} placeholder='Text' onChange={editNoteChange} />
                    <h3>Auther</h3>
                    <input type="number" name="auther" value={edit.auther} placeholder='Number' onChange={editNoteChange} />
                    <button onClick={updateNote}>Update</button>
                </div>
            </div>
        )
    }




    return (
        <div className='container' >
            <div className="form">
                <h3>Text</h3>
                <input type="text" onChange={noteTarget} name="text" value={note.text} placeholder='Text' />
                <h3>Auther</h3>
                <input type="number" onChange={noteTarget} name="auther" value={note.auther} placeholder='Number' />
                <button onClick={noteAdd}>Add Note</button>

            </div>

            <div className="lists">
                {noteList}
            </div>
            <div className="modal">
                {editNotElement}
            </div>
        </div>
    )
}

export default CRUD