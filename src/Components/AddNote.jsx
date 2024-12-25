import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { v4 } from 'uuid';
const AddNote = () => {
    const {setUpDate, saveNote, update, lang, active, setActive, setNotes, notes, text, setText, title, setTitle } = useContext(Context)
   
    const id = v4().slice(0, 8)
    const cancelNote = (e) => {
        e.preventDefault()
        setActive(!active)
        setUpDate({ edit: false, note: {} })
        setText("")
        setText("")
    }
    const noteSubmit = (e) => {
        e.preventDefault()
        if (title.length > 2) {
            const newNote = {
                id: update.edit ? update.note.id : id,
                title: title,
                text: text,
                date: new Date().toLocaleDateString()
            }
            if (update.edit) {
                saveNote(update.note.id, newNote)
            }else{
                setNotes([...notes, newNote])
            }
         
            setText('')
            setTitle('')
            setActive(false)
        }
    }
    return (
        <div className={`add ${active && 'active'}`}>
            <div className="add_card">
                <h2 className="add_title">{update.edit ? lang.titlewindowedit : lang.titlewindow}</h2>
                <form className='add_form' onSubmit={noteSubmit}>
                    <label className='add_label'>
                        <span>Title</span>
                        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <label className='add_label'>
                        <span>Content</span>
                        <input type="text" placeholder='Content' value={text} onChange={(e) => setText(e.target.value)} />
                    </label>
                    <div className="add_btns">
                        <button className="btn btn_danger" onClick={cancelNote}><span>{lang.closebtn}</span></button>
                        <button className="btn btn_primary" onClick={noteSubmit}><span>{update.edit ? lang.editwindowbtn : lang.addbtn}</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNote