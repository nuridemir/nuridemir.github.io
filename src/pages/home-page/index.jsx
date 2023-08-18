import React from 'react'
import WebLayout from '~/layouts/web-layout'
import ProjectsComponent from './components/projects-component'
import PracticesComponent from './components/practices-component'

const HomePage = () => {
  return (
    <WebLayout>
      <ProjectsComponent />
      <div className='my-20'></div>
      <PracticesComponent />
    </WebLayout>
  )
}

export default HomePage