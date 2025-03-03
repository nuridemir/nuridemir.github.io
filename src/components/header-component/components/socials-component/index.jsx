import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiOutlineLink } from 'react-icons/ai';

export default function SocialsComponent() {

    const socials = [
        {
            title: "github",
            href: "https://github.com/nuridemir",
            icon: <AiOutlineGithub />
        },
        {
            title: "linkledin",
            href: "https://www.linkedin.com/in/nuridemir34/",
            icon: <AiFillLinkedin />
        },
        {
            title: "website",
            href: "mailto:ndemir9@hotmail.com",
            icon: <AiOutlineLink />
        }
    ]

    return (
        <ul className='flex items-center gap-4 mt-8'>
            {
                socials.map((item) => (
                    <li key={item.title}>
                        <a href={item.href} className='text-4xl text-slate-600 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300 duration-200' target='_blank'>
                            {item.icon}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}
