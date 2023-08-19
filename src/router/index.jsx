import { Route, Routes } from 'react-router-dom'
import BlogsPage from '~/pages/blogs-page'
import HomePage from '~/pages/home-page'
import NotFound404Page from '~/pages/not-found-404-page'
import PraticesPage from '~/pages/pratices-page'
import ProjectsPage from '~/pages/projects-page'
export default function RouteSystem() {
    return (
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/projects" exact element={<ProjectsPage />} />
            <Route path="/pratices" exact element={<PraticesPage />} />
            <Route path="/blogs" exact element={<BlogsPage />} />
            <Route path="*" exact element={<NotFound404Page />} />
        </Routes>
    )
}
