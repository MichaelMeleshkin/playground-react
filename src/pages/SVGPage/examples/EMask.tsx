import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EMask: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="mask">
            <svg viewBox="0 0 100 100">
                <mask id="mask1">
                    {/* NOTE: Use #FFF color to remove opacity */}
                    <rect x="0" y="0" width="100%" height="100%" fill="gray" />

                    <use x="25%" y="25%" width="50%" height="50%" href={`#${selectedIcon}`} fill="black" />
                </mask>
                <mask id="mask2">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />

                    <use x="7.5%" y="7.5%" width="10%" height="10%" href={`#${selectedIcon}`} fill="black" />
                </mask>

                <polygon points="0,100 100,100 100,0" fill="blue" />

                <use x="0" y="0" width="100%" height="100%" href={`#${selectedIcon}`} fill="red" mask="url(#mask1)" />

                <use x="37.5%" y="37.5%" width="25%" height="25%" href={`#${selectedIcon}`} fill="green" mask="url(#mask2)" />
            </svg>
        </SVGTag>
    )
}

export default EMask
