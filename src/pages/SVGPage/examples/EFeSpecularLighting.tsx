import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeSpecularLighting: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feSpecularLighting">
            <svg viewBox="0 0 100 100">
                <filter id="fePointLight-fePointLight">
                    <feSpecularLighting result="fePointLight1" specularConstant="1" specularExponent="40" lightingColor="red">
                        <fePointLight x="-10" y="50" z="50" />
                    </feSpecularLighting>
                    <feComposite in="fePointLight1" in2="SourceGraphic" operator="atop" k1="0" k2="1" k3="1" k4="0" />
                </filter>
                <filter id="fePointLight-feSpotLight">
                    <feSpecularLighting result="fePointLight2" specularConstant="5.5" specularExponent="2" lightingColor="orange">
                        <feSpotLight x="150" y="125" z="25" limitingConeAngle="5.5" />
                    </feSpecularLighting>
                    <feComposite in="fePointLight2" in2="SourceGraphic" operator="atop" k1="0" k2="1" k3="1" k4="0" />
                </filter>
                <defs>
                    <use id="feSpecularLighting-icon" width="75%" height="75%" href={`#${selectedIcon}`} />
                </defs>

                <use x="0" y="0" href="#feSpecularLighting-icon" filter="url(#fePointLight-fePointLight)" />
                <use x="25%" y="25%" href="#feSpecularLighting-icon" filter="url(#fePointLight-feSpotLight)" />
            </svg>
        </SVGTag>
    )
}

export default EFeSpecularLighting
