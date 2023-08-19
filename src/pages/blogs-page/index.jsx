import React from 'react'
import GoBackComponent from '~/components/goback-component'
import WebLayout from '~/layouts/web-layout'
import CardComponent from '~/components/card-component'


export default function BlogsPage() {
    return (
        <WebLayout>
            <GoBackComponent />
            <CardComponent apiUrl="/blogs.json" title="Blogs" errorMessage="Blogs not found..." />
        </WebLayout>
    )
}
