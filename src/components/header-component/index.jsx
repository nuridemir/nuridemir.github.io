import React from 'react'
import TitleComponent from './components/title-component';
import SocialsComponent from './components/socials-component';
import FixedHeaderComponent from './components/fixed-header-component';


const HeaderComponent = () => {



    return (
        <header>
            <FixedHeaderComponent />
            <div className='mb-14 mt-4'>
                <TitleComponent />
                <SocialsComponent />
            </div>
        </header>
    )
}

export default HeaderComponent