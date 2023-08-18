import React from 'react'
import HeaderComponent from '~/components/header-component'

const WebLayout = ({ children }) => {
    return (
        <div className="bg-zinc-50 dark:bg-slate-800 w-full min-h-screen py-14">
            <div className="custom-container">
                <HeaderComponent />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default WebLayout