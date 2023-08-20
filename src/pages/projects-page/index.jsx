import React from 'react'
import GoBackComponent from '~/components/goback-component'
import WebLayout from '~/layouts/web-layout'
import PaginateCardComponent from '~/components/paginate-card-component'


export default function ProjectsPage() {
    return (
        <WebLayout>
            <GoBackComponent />
            <PaginateCardComponent apiUrl="/projects.json" title="Projects" errorMessage="Projects not found..." searchInput searchPlaceholder="Search project..." />
        </WebLayout>
    )
}
