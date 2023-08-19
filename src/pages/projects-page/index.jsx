import React from 'react'
import GoBackComponent from '~/components/goback-component'
import WebLayout from '~/layouts/web-layout'
import CardComponent from '~/components/card-component'


export default function ProjectsPage() {
    return (
        <WebLayout>
            <GoBackComponent />
            <CardComponent apiUrl="/projects.json" title="Projects" errorMessage="Projects not found..." searchInput />
        </WebLayout>
    )
}
