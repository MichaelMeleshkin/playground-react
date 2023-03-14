import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeDisplacementMap: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feDisplacementMap">
            <svg viewBox="0 0 100 100">
                <filter id="feDMFilter1">
                    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <filter id="feDMFilter2">
                    <feTurbulence type="turbulence" baseFrequency="0.5" numOctaves="2" result="turbulence" />
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <filter id="feDMFilter3">
                    <feTurbulence type="turbulence" baseFrequency="5" numOctaves="2" result="turbulence" />
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <filter id="feDMFilter4">
                    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="3" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <use x="0" y="0" width="49%" height="47%" href={`#${selectedIcon}`} style={{ filter: 'url(#feDMFilter1)' }} />
                <use x="47%" y="0" width="49%" height="47%" href={`#${selectedIcon}`} style={{ filter: 'url(#feDMFilter2)' }} />
                <use x="0" y="50%" width="49%" height="47%" href={`#${selectedIcon}`} style={{ filter: 'url(#feDMFilter3)' }} />
                <use x="47%" y="50%" width="49%" height="47%" href={`#${selectedIcon}`} style={{ filter: 'url(#feDMFilter4)' }} />
            </svg>
        </SVGTag>
    )
}

export default EFeDisplacementMap
