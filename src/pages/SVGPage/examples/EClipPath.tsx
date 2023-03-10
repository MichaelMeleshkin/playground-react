import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EClipPath: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="clipPath">
            <svg viewBox="0 0 100 100">
                <use id="clipPath-icon" href={`#${selectedIcon}`} />

                <clipPath id="clipPath-circle">
                    <circle cx="40" cy="35" r="35" fill="blue" />
                </clipPath>

                <use clipPath="url(#clipPath-circle)" href={`#${selectedIcon}`} style={{ color: 'red' }} />
            </svg>
        </SVGTag>
    )
}

export default EClipPath
