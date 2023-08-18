import { Route, Routes } from 'react-router-dom'
import HomePage from '~/pages/home-page'
import NotFound404Page from '~/pages/not-found-404-page'
import PraticesPage from '~/pages/pratices-page'
import ProjectsPage from '~/pages/projects-page'

export default function RouteSystem() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/pratices" element={<PraticesPage />} />
            <Route path="*" element={<NotFound404Page />} />
        </Routes>
    )
}
