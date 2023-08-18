import React from 'react'
import GoBackComponent from '~/components/goback-component';
import WebLayout from '~/layouts/web-layout'
import PracticesComponent from '~/components/practices-component';

export default function PraticesPage() {
    return (
        <WebLayout>
            <GoBackComponent />
            <PracticesComponent paginate={true} />
        </WebLayout>
    )
}
