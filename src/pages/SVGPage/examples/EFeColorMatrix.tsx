import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeColorMatrix: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feColorMatrix">
            <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ minHeight: '150px', minWidth: '150px' }}>
                <defs>
                    <g id="feColorMatrix-icon">
                        <use href={`#${selectedIcon}`} transform="translate(0 0)" width="10%" height="10%" />
                        <use href={`#${selectedIcon}`} transform="translate(0 40)" width="20%" height="20%" />
                        <use href={`#${selectedIcon}`} transform="translate(40 0)" width="30%" height="30%" />
                        <use href={`#${selectedIcon}`} transform="translate(40 40)" width="40%" height="40%" />
                    </g>
                </defs>

                <filter id="feColorMatrix-fe1">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="1 1 1 1 0
                                0 0 0 0 0
                                0 0 0 0 0
                                0 0 0 1 0"
                    />
                </filter>

                <filter id="feColorMatrix-fe2">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0 0 0 0 0
                                1 1 1 1 0
                                0 0 0 0 0
                                0 0 0 1 0"
                    />
                </filter>

                <filter id="feColorMatrix-fe3">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0 0 0 0 0
                                0 0 0 0 0
                                1 1 1 1 0
                                0 0 0 1 0"
                    />
                </filter>

                <filter id="feColorMatrix-fe4">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0.5 0.5 0.5 0.5 0
                                0.5 0.5 0.5 0.5 0
                                0.5 0.5 0.5 0.5 0
                                0 0 0 0.5 0"
                    />
                </filter>

                <use href="#feColorMatrix-icon" transform="translate(0 0)" filter="url(#feColorMatrix-fe1)" />
                <use href="#feColorMatrix-icon" transform="translate(0 20)" filter="url(#feColorMatrix-fe2)" />
                <use href="#feColorMatrix-icon" transform="translate(20 0)" filter="url(#feColorMatrix-fe3)" />
                <use href="#feColorMatrix-icon" transform="translate(20 20)" filter="url(#feColorMatrix-fe4)" />
            </svg>
        </SVGTag>
    )
}

export default EFeColorMatrix
