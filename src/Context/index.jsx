import React, { createContext, useEffect, useState } from 'react'
import { ru, uz } from '../lang';
export const Context = createContext()
const ContextProvider = ({ children }) => {
    const [notes, setNotes] = useState(getNote)
    const [active, setActive] = useState(false)
    const [flag, setFlag] = useState(false)
    const [lang, setLang] = useState(uz)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [value, setValue] = useState('')
    const [update, setUpDate] = useState({
        note: {}, edit:false
    })
    function getNote() {
        let notes = localStorage.getItem('notes')
        if (notes) {
            return JSON.parse(notes)
        }else{
            return []
        }
    }
    useEffect(() => {  
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const delNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }
    const changeNote = (note) => {
        setText(note.text)
        setTitle(note.title)
        setActive(true)
        setUpDate({
            note: note,
            edit: true
        })
    }
    const saveNote = (id, newNote) => {
        setNotes(notes.map(note => note.id == id ? newNote : note))
        setUpDate({ edit: false, note: {} })
    }
    const changeLang = (str) => {
        str == 'uz' ? setLang(uz) : setLang(ru)
        setFlag(!flag)
    }
    return (
        <Context.Provider value={{value, setValue, setUpDate, saveNote, update, text, setText, title,setTitle, delNote, changeNote,  flag, lang, changeLang, notes, active, setActive, setNotes }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider