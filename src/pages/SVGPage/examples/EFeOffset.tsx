import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeOffset: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feOffset">
            <svg viewBox="0 0 100 100">
                <defs>
                    <filter id="feOffset-filter" width="100" height="100">
                        <feOffset in="SourceGraphic" dx="50" dy="50" />
                    </filter>
                </defs>

                <use x="0" y="0" width="50%" height="50%" href={`#${selectedIcon}`} />
                <use x="0" y="0" width="50%" height="50%" href={`#${selectedIcon}`} filter="url(#feOffset-filter)" />
            </svg>
        </SVGTag>
    )
}

export default EFeOffset
