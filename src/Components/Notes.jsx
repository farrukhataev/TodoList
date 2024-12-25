import React, { useContext, useState } from 'react'
import { IoMdGrid } from "react-icons/io";
import { FaList } from "react-icons/fa6";
import { Context } from '../Context';
import Note from './Note';

const Notes = () => {
    const [active, setActive] = useState(false)
    const { lang, notes , value } = useContext(Context)
    const notesFilter = notes.filter(note => {
        if (value.trim() == "") {
            return note
        }else{
            return note.title.toLowerCase().includes(value.toLowerCase())
        }
    } )
    return (
        notesFilter.length ?        
         <div className="notes">
            <div className="container">
                <div className="notes_top">
                    <h2 className="notes_title">{lang.infobar}</h2>
                    <div className="notes_btn" onClick={() => setActive(!active)}>
                        {active ?
                            <>
                                <IoMdGrid />
                                <span>{lang.grid}</span>
                            </>
                            :
                            <>
                                <FaList />
                                <span>{lang.list}</span>
                            </>

                        }
                    </div>
                </div>
                <div className={`notes_box ${active && 'active'}`} >
                    {notesFilter.map(note => (
                        <Note note={note} key={note.id} />
                    ))}
                </div>
            </div>
        </div>
        : <h2 className="nonote">{lang.nonote}</h2>
    )
}

export default Notes