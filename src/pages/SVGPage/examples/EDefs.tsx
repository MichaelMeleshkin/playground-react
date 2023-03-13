import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EDefs: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="defs">
            <svg viewBox="0 0 100 100">
                <defs>
                    <use id="defs-icon" href={`#${selectedIcon}`} />

                    <rect id="defs-circle" width="100" height="100" fill="url('#defs-gradient')" />
                    <linearGradient id="defs-gradient" gradientTransform="rotate(90)">
                        <stop offset="20%" stopColor="gold" />
                        <stop offset="90%" stopColor="red" />
                    </linearGradient>
                </defs>

                <use href="#defs-circle" />
                <use href="#defs-icon" />
            </svg>
        </SVGTag>
    )
}

export default EDefs
