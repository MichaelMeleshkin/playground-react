import React, { useEffect, useState } from 'react'
import { CETimerClass } from './CETimerClass'
import { cElements } from '../../../../shared/services'
import FaIcon from '../../../../shared/components/FaIcon'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'

type Props = {
    hours?: string
    minutes?: string
    seconds?: string
    countMessage?: string
    finalMessage?: string
}

const CETimer: React.FC<Props> = ({
    hours,
    minutes,
    seconds,
    countMessage = 'You have $1 seconds till the end',
    finalMessage = "Time's up",
}: Props) => {
    const [resetId, setResetId] = useState<number>(0)

    useEffect(() => {
        cElements.define('ce-timer', CETimerClass)
    }, [])

    function getRandomNumber(): number {
        return Math.ceil(Math.random() * 10) + 1
    }

    return (
        <>
            <div className="mb-2" style={{ minHeight: '1.4rem' }}>
                <style>{`ce-timer { --ce-timer-main-message: red; --ce-timer-after: blue; }`}</style>
                <ce-timer
                    data-seconds={seconds}
                    data-minutes={minutes}
                    data-hours={hours}
                    data-count-message={countMessage}
                    data-final-message={finalMessage}
                    data-reset={resetId}
                >
                    <span slot="before" className="slot-bold">
                        Hours: {hours || 0}. Minutes: {minutes || 0}. Seconds: {seconds || 0}. <br />
                    </span>
                    <span slot="after">
                        <FaIcon name={faStopwatch}></FaIcon>
                    </span>
                </ce-timer>
            </div>
            <button type="button" className="btn btn-primary d-block me-2 mb-2" onClick={() => setResetId(getRandomNumber())}>
                Reset timer
            </button>
        </>
    )
}

export default CETimer
