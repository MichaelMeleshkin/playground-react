import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeBlend: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feBlend">
            <svg viewBox="0 0 100 100">
                <defs>
                    <filter id="feBlend-filter">
                        <feFlood result="floodFill" x="0" y="0" width="100%" height="100%" floodColor="green" floodOpacity="1" />
                        <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
                    </filter>
                </defs>

                <use id="defs-icon" href={`#${selectedIcon}`} style={{ filter: 'url(#feBlend-filter)' }} />
            </svg>
        </SVGTag>
    )
}

export default EFeBlend
