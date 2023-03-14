import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeDiffuseLighting: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feDiffuseLighting" subTags={['fePointLight', 'feDistantLight', 'feSpotLight']}>
            <svg viewBox="0 0 100 100">
                <defs>
                    <use id="feDiffuseLighting-icon" href={`#${selectedIcon}`} height="50%" width="50%" fill="green" />
                </defs>

                <filter id="feDiffuseLighting1">
                    <feDiffuseLighting in="SourceGraphic" result="light" lightingColor="white">
                        <fePointLight x="10" y="10" z="10" />
                    </feDiffuseLighting>

                    <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
                </filter>

                <filter id="feDiffuseLighting2">
                    <feDiffuseLighting in="SourceGraphic" result="light" lightingColor="white">
                        <feDistantLight azimuth="25" elevation="10" />
                    </feDiffuseLighting>

                    <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
                </filter>

                <filter id="feDiffuseLighting3">
                    <feDiffuseLighting in="SourceGraphic" result="light" lightingColor="white">
                        <feSpotLight x="60" y="5" z="30" limitingConeAngle="20" pointsAtX="10" pointsAtY="40" pointsAtZ="-30" />
                    </feDiffuseLighting>

                    <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
                </filter>

                <use href="#feDiffuseLighting-icon" x="0" y="0" />
                <use href="#feDiffuseLighting-icon" x="50%" y="0" filter="url(#feDiffuseLighting1)" />
                <use href="#feDiffuseLighting-icon" x="0" y="50%" filter="url(#feDiffuseLighting2)" />
                <use href="#feDiffuseLighting-icon" x="50%" y="50%" filter="url(#feDiffuseLighting3)" />
            </svg>
        </SVGTag>
    )
}

export default EFeDiffuseLighting
