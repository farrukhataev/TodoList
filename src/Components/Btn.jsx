import React, { useContext } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { Context } from '../Context';

const Btn = () => {
    const { setActive, active } = useContext(Context)
    return (
        <div className="container">
            <button className='add_btn' onClick={()=>setActive(!active)}>
                <FaPencilAlt />
            </button>
        </div>
    )
}

export default Btn