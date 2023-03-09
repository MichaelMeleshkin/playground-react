import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.scss'
import SVGPage from './pages/SVGPage'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.SVG} element={<SVGPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
