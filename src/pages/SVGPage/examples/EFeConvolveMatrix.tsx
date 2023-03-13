import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeConvolveMatrix: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feConvolveMatrix">
            <svg viewBox="0 0 100 100">
                <defs>
                    <filter id="convolve">
                        <feConvolveMatrix kernelMatrix="1 0 0 0 0 0 0 0 -1" />
                    </filter>
                </defs>

                <use id="feConvolveMatrix-icon" href={`#${selectedIcon}`} filter="url(#convolve)" />
            </svg>
        </SVGTag>
    )
}

export default EFeConvolveMatrix
