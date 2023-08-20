import React from 'react'
import GoBackComponent from '~/components/goback-component';
import PaginateCardComponent from '~/components/paginate-card-component';
import WebLayout from '~/layouts/web-layout'

export default function PraticesPage() {
    return (
        <WebLayout>
            <GoBackComponent />
            <PaginateCardComponent apiUrl="/pratices.json" title="Practices" errorMessage="Pratices not found..." searchPlaceholder="Search pratice..." searchInput />
        </WebLayout>
    )
}
