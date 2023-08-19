import React from 'react'
import ToggleThemeComponent from '~/components/toggle-theme-component'

export default function FixedHeaderComponent() {
    return (
        <div className='fixed top-0 left-0 w-full z-50 shadow dark:drop-shadow-2xl py-3 bg-zinc-50 dark:bg-slate-800'>
            <div className="custom-container flex items-center justify-end"><ToggleThemeComponent /></div>
        </div>
    )
}
