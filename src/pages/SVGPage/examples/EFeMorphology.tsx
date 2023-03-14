import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeMorphology: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feMorphology">
            <svg viewBox="0 0 100 100">
                <filter id="feMorphology-erode">
                    <feMorphology operator="erode" radius="2" />
                </filter>
                <filter id="feMorphology-dilate">
                    <feMorphology operator="dilate" radius="4" />
                </filter>

                <use width="50%" height="50%" href={`#${selectedIcon}`} x="0" y="0" />
                <use width="50%" height="50%" href={`#${selectedIcon}`} x="-5" y="50%" filter="url(#feMorphology-erode)" />
                <use width="50%" height="50%" href={`#${selectedIcon}`} x="45%" y="45%" filter="url(#feMorphology-dilate)" />
            </svg>
        </SVGTag>
    )
}

export default EFeMorphology
