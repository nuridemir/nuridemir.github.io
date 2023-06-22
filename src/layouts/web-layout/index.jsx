import React from 'react'
import HeaderComponent from '~/components/header-component'

const WebLayout = ({ children }) => {
    return (
        <div className="bg-slate-800 min-h-screen">
            <div className="px-4 max-2xl:container w-7/12 mx-auto py-12">
                <HeaderComponent />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default WebLayout