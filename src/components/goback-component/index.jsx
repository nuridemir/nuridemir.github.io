import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from "react-icons/bi"

export default function GoBackComponent() {
    const navigate = useNavigate();
    return (
        <div className='mb-8'><button onClick={() => navigate(-1)} className='rounded-md dark:bg-slate-900 p-1 bg-slate-200 text-slate-700 dark:text-slate-300'><BiLeftArrowAlt size="2rem" /></button></div>
    )
}
