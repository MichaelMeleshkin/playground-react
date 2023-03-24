import React, { useEffect, useRef, useState } from 'react'
import { cElements } from '../../../../shared/services'
import { CETimerRangeClass } from './CETimerRangeClass'
import FaIcon from '../../../../shared/components/FaIcon'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'

type Props = {
    defaultValue?: number
    min?: number
    max?: number
    countMessage?: string
    finalMessage?: string
}

const CETimerRange: React.FC<Props> = ({
    defaultValue = 0,
    min = 0,
    max = 9999,
    countMessage = 'You have $1 seconds till the end',
    finalMessage = "Time's up",
}: Props) => {
    const [current, setCurrent] = useState<number>(defaultValue)

    useEffect(() => {
        cElements.define('ce-range-timer', CETimerRangeClass, { extends: 'input' })
    }, [])

    return (
        <>
            <div data-test="ce-range-timer-range" className="mb-2" style={{ minHeight: '1.4rem' }}>
                <span slot="before">
                    Min: {min}. Max: {max}. Current value: {current}. <br />
                </span>
                <span slot="after">
                    <FaIcon name={faStopwatch}></FaIcon>
                </span>
            </div>
            <input
                id="ce-range-timer-range"
                is="ce-range-timer"
                type="range"
                onChange={(event) => setCurrent(parseInt(event.target.value))}
                min={min}
                max={max}
                defaultValue={defaultValue}
                data-count-message={countMessage}
                data-final-message={finalMessage}
            />
        </>
    )
}

export default CETimerRange
