import React from 'react'
import PageLayout from '../../shared/components/PageLayout'
import CETimer from './CustomElements/Timers/CETimer'
import CETimerRange from './CustomElements/Timers/CETimerRange'

const WebComponents: React.FC = () => {
    return (
        <div>
            <PageLayout pageTitle="Web Components Page">
                <>
                    <p className="h4">
                        <b>Refresh the page to restart the timers</b>
                    </p>
                    <CETimer seconds="9" />
                    <hr />
                    <CETimerRange defaultValue={7} min={0} max={12} />
                </>
            </PageLayout>
        </div>
    )
}

export default WebComponents
