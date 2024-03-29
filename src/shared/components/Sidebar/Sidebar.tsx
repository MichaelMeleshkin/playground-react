import React from 'react'
import { ROUTES } from '../../../resources/routes-constants'
import FaIcon, { FaIcons } from '../FaIcon'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

import './Sidebar.scss'

interface Navigation {
    route: string
    title: string
    icon: IconDefinition
}

const NAV_LIST: Navigation[] = [
    {
        route: ROUTES.HOME,
        title: 'Home',
        icon: FaIcons.home,
    },
    {
        route: ROUTES.SVG,
        title: 'SVG',
        icon: FaIcons.image,
    },
    {
        route: ROUTES.WEB_COMPONENTS,
        title: 'Web components',
        icon: FaIcons.code,
    },
]

const Sidebar: React.FC = () => {
    return (
        <nav className="d-flex flex-nowrap">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px' }}>
                <NavLink
                    to={ROUTES.HOME}
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                    <svg className="bi pe-none me-2" width="40" height="32" viewBox="0 0 118 94">
                        <title>Bootstrap</title>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                        ></path>
                    </svg>
                    <span className="fs-4">Sidebar</span>
                </NavLink>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    {NAV_LIST.map(({ route, icon, title }) => (
                        <li className="nav-item" key={route}>
                            <NavLink to={route} className="nav-link" aria-current="page">
                                <FaIcon name={icon} className="nav-icon me-2" />
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="b-example-divider b-example-vr"></div>
        </nav>
    )
}

export default Sidebar
