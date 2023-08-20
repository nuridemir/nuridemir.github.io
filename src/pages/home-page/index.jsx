import React from 'react'
import WebLayout from '~/layouts/web-layout'
import CardComponent from '~/components/card-component'

const HomePage = () => {
  return (
    <WebLayout>
      <CardComponent apiUrl="/blogs.json" title="Blogs" errorMessage="Blogs not found..." href="/blogs" />
      <div className='my-20'></div>
      <CardComponent apiUrl="/projects.json" title="Projects" errorMessage="Projects not found..." href="/projects" />
      <div className='my-20'></div>
      <CardComponent apiUrl="/pratices.json" title="Practices" errorMessage="Pratices not found..." href="/pratices" />
    </WebLayout>
  )
}

export default HomePage