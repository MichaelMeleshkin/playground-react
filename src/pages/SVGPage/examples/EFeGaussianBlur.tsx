import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeGaussianBlur: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feGaussianBlur">
            <svg viewBox="0 0 100 100">
                <filter id="feGaussianBlur-blur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                </filter>
                <filter id="feGaussianBlur-shadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                    <feOffset dx="1" dy="1" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <use href={`#${selectedIcon}`} height="50%" width="50%" x="5%" y="5%" filter="url(#feGaussianBlur-blur)" />
                <use href={`#${selectedIcon}`} height="50%" width="50%" x="45%" y="45%" filter="url(#feGaussianBlur-shadow)" />
            </svg>
        </SVGTag>
    )
}

export default EFeGaussianBlur
