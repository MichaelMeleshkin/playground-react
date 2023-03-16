import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const ERadialGradient: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="radialGradient" subTags={['stop']}>
            <svg viewBox="0 0 100 100">
                <defs>
                    <radialGradient id="radialGradient">
                        <stop offset="10%" stopColor="gold" />
                        <stop offset="95%" stopColor="red" />
                    </radialGradient>
                </defs>

                <use x="0" y="0" width="100%" height="100%" href={`#${selectedIcon}`} fill="url(#radialGradient)" />
            </svg>
        </SVGTag>
    )
}

export default ERadialGradient
