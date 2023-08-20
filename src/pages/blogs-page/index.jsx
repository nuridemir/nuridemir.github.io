import React from 'react'
import GoBackComponent from '~/components/goback-component'
import WebLayout from '~/layouts/web-layout'
import PaginateCardComponent from '~/components/paginate-card-component'


export default function BlogsPage() {
    return (
        <WebLayout>
            <GoBackComponent />
            <PaginateCardComponent apiUrl="/blogs.json" title="Blogs" errorMessage="Blogs not found..." searchInput searchPlaceholder="Search blog..." />
        </WebLayout>
    )
}
