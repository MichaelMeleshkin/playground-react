import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeDropShadow: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feDropShadow">
            <svg viewBox="0 0 100 100">
                <defs>
                    <filter id="feDropShadow1">
                        <feDropShadow dx="1" dy="2" stdDeviation="0.5" />
                    </filter>
                    <filter id="feDropShadow2">
                        <feDropShadow dx="-1" dy="-2" stdDeviation="0.5" />
                    </filter>
                    <filter id="feDropShadow3">
                        <feDropShadow floodOpacity="0.9" stdDeviation="0" dx="0.5" dy="-0.5" floodColor="red" />
                        <feDropShadow floodOpacity="0.9" stdDeviation="0" dx="0.5" dy="-0.5" floodColor="orange" />
                        <feDropShadow floodOpacity="0.9" stdDeviation="0" dx="0.5" dy="-0.5" floodColor="yellow" />
                        <feDropShadow floodOpacity="0.9" stdDeviation="0" dx="0.5" dy="-0.5" floodColor="green" />
                        <feDropShadow floodOpacity="0.9" stdDeviation="0" dx="0.5" dy="-0.5" floodColor="lightblue" />
                        <feDropShadow floodOpacity="0.9" stdDeviation="0" dx="0.5" dy="-0.5" floodColor="blue" />
                        <feDropShadow floodOpacity="0.9" stdDeviation="0" dx="0.5" dy="-0.5" floodColor="violet" />
                    </filter>
                    <use id="feDropShadow-icon" height="45%" width="45%" href={`#${selectedIcon}`} fill="lightblue" />
                </defs>

                <use href="#feDropShadow-icon" filter="url(#feDropShadow1)" x="0" y="0" />
                <use href="#feDropShadow-icon" filter="url(#feDropShadow2)" x="45%" y="5%" />
                <use href="#feDropShadow-icon" filter="url(#feDropShadow3)" x="20%" y="55%" />
            </svg>
        </SVGTag>
    )
}

export default EFeDropShadow
