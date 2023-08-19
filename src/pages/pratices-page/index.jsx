import React from 'react'
import CardComponent from '~/components/card-component';
import GoBackComponent from '~/components/goback-component';
import WebLayout from '~/layouts/web-layout'

export default function PraticesPage() {
    return (
        <WebLayout>
            <GoBackComponent />
            <CardComponent apiUrl="/pratices.json" title="Practices" errorMessage="Pratices not found..." paginate={true} />
        </WebLayout>
    )
}
