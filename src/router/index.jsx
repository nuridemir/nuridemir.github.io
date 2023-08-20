import { Navigate, Route, Routes } from 'react-router-dom'
import BlogsPage from '~/pages/blogs-page'
import HomePage from '~/pages/home-page'
import NotFound404Page from '~/pages/not-found-404-page'
import PraticesPage from '~/pages/pratices-page'
import ProjectsPage from '~/pages/projects-page'
export default function RouteSystem() {
    return (
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/pratices" element={<PraticesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/not-found" element={<NotFound404Page />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
    )
}
