import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiOutlineLink } from 'react-icons/ai';


const HeaderComponent = () => {

    function DescRender() {
        return (
            <h1 className="text-5xl text-violet-300 font-bold leading-tigh">
                Hi, my name is Nuri Demir. I'm <i><span className='font-playfair underline'>Front-end Developer</span></i>.
            </h1>
        )
    }

    function SocialsRender() {
        return (
            <ul className='flex items-center gap-4 mt-8'>
                <li><a href='https://github.com/ndemir9' className='text-slate-500 hover:text-slate-300 duration-200' target='_blank'><AiOutlineGithub size="3rem" /></a></li>
                <li><a href='https://www.linkedin.com/in/ndemir9' className='text-slate-500 hover:text-slate-300 duration-200' target='_blank'><AiFillLinkedin size="3rem" /></a></li>
                <li><a href='https://ndemir9.github.io/' className='text-slate-500 hover:text-slate-300 duration-200' target='_blank'><AiOutlineLink size="3rem" /></a></li>
            </ul>
        )
    }



    return (
        <header className='mb-20'>
            <DescRender />
            <SocialsRender />
        </header>
    )
}

export default HeaderComponent