import React, { useEffect, useState } from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiOutlineLink } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';


const HeaderComponent = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || null);

    useEffect(() => {
        if (theme) document.body.classList.add("dark")
        else document.body.classList.remove("dark");
    }, [theme]);

    const handleThemeSwitch = () => {
        if (theme) {
            setTheme(false)
            localStorage.removeItem('theme');
        } else {
            setTheme(true)
            localStorage.setItem('theme', true);
        }

    };

    function ThemeButtonRender() {
        return (
            <>
                <button onClick={handleThemeSwitch}>{theme ? <BsFillMoonFill size="24" /> : <BsFillSunFill size="24" className='text-slate-600' />}</button>
            </>
        )
    }

    function DescRender() {
        return (
            <h1 className="text-5xl text-violet-500 dark:text-violet-300 font-bold leading-tigh">
                Hi, my name is Nuri Demir. I'm <i><span className='font-playfair underline'>Front-end Developer</span></i>.
            </h1>
        )
    }

    function SocialsRender() {
        return (
            <ul className='flex items-center gap-4 mt-8'>
                <li><a href='https://github.com/ndemir9' className='text-slate-600 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300 duration-200' target='_blank'><AiOutlineGithub size="2rem" /></a></li>
                <li><a href='https://www.linkedin.com/in/ndemir9' className='text-slate-600 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300 duration-200' target='_blank'><AiFillLinkedin size="2rem" /></a></li>
                <li><a href='https://ndemir9.github.io/' className='text-slate-600 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300 duration-200' target='_blank'><AiOutlineLink size="2rem" /></a></li>
            </ul>
        )
    }

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-50 shadow dark:drop-shadow-2xl py-2 bg-zinc-50 dark:bg-slate-800'>
                <div className="custom-container flex items-center justify-end"><ThemeButtonRender /></div>
            </div>
            <header className='mb-14'>
                <DescRender />
                <SocialsRender />
            </header>
        </>
    )
}

export default HeaderComponent