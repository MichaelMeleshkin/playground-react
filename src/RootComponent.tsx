import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './resources/routes-constants'
import './styles/main.scss'
import { HomePage, NotFoundPage, SVGPage, WebComponents } from './pages'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.SVG} element={<SVGPage />} />
                <Route path={ROUTES.WEB_COMPONENTS} element={<WebComponents />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
