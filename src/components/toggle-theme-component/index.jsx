import React, { useEffect, useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { MdOutlineDesktopMac } from 'react-icons/md';

export default function ToggleThemeComponent() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system");
    let darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

    function onWindowMatch() {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
            document.body.classList.add("dark");
        } else {
            localStorage.removeItem('theme');
        }
    }
    useEffect(() => {
        if (theme) {
            if (theme === "dark") {
                document.body.classList.add("dark");
                localStorage.setItem("theme", "dark")
            } else if (theme === "light") {
                document.body.classList.remove("dark");
                localStorage.setItem("theme", "light")
            } else {
                localStorage.removeItem('theme');
                onWindowMatch()
            }
        }
    }, [theme])

    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) document.body.classList.add("dark");
            else document.body.classList.remove("dark");
        }
    })

    const themeIcon = [
        {
            icon: <BsFillSunFill />,
            text: "light",
        },
        {
            icon: <BsFillMoonFill />,
            text: "dark",
        },
        {
            icon: <MdOutlineDesktopMac />,
            text: "system",
        }
    ]

    return (
        <div className='flex items-center gap-4 text-xl text-gray-600 dark:text-gray-200'>{
            themeIcon.map((item) => (
                <button onClick={() => setTheme(item.text)} key={item.text} className={`${theme === item.text && "text-blue-500"}`}>{item.icon}</button>
            ))
        }</div>
    )
}
