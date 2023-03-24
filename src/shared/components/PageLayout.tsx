import React, { ReactElement } from 'react'
import PageTitle from './PageTitle'
import Sidebar from './Sidebar/Sidebar'
import ErrorBoundary from './ErrorBoundary'

type Props = {
    pageTitle: string
    children?: ReactElement
}

const PageLayout: React.FC<Props> = ({ pageTitle, children }: Props) => {
    return (
        <div className="d-flex">
            <Sidebar />
            <main className="p-3">
                <PageTitle text={pageTitle}></PageTitle>
                <ErrorBoundary>
                    <section>{children}</section>
                </ErrorBoundary>
            </main>
        </div>
    )
}

export default PageLayout
