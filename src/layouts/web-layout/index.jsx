import React from 'react'
import HeaderComponent from '~/components/header-component'

const WebLayout = ({ children }) => {
    return (
        <div className="bg-slate-800">
            <div className="px-4 mx-auto py-12"
                style={{
                    width: "100%",
                    maxWidth: "1024px"
                }}>
                <HeaderComponent />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default WebLayout