import React from 'react'
import GoBackComponent from '~/components/goback-component'
import WebLayout from '~/layouts/web-layout'
import ProjectsComponent from '~/components/projects-component'


export default function ProjectsPage() {
    return (
        <WebLayout>
            <GoBackComponent />
            <ProjectsComponent />
        </WebLayout>
    )
}
