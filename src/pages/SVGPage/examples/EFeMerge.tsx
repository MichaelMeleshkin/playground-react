import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeMerge: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feMerge" subTags={['feMergeNode']}>
            <svg viewBox="0 0 100 100">
                <filter id="feMerge-filter" x="0" y="0" width="100" height="100">
                    <feOffset in="SourceGraphic" dx="50" dy="0" result="feMerge-offset1" />
                    <feTurbulence type="turbulence" baseFrequency="0.5" numOctaves="2" result="feMerge-turbulence" />
                    <feDisplacementMap
                        in="feMerge-offset1"
                        in2="feMerge-turbulence"
                        scale="10"
                        xChannelSelector="R"
                        yChannelSelector="G"
                        result="feMerge-feDisplacementMap"
                    />

                    <feOffset in="SourceGraphic" dx="5" dy="50" result="feMerge-offset2" />
                    <feGaussianBlur in="feMerge-offset2" stdDeviation="2" result="feMerge-feGaussianBlur" />

                    <feOffset in="SourceGraphic" dx="50" dy="50" result="feMerge-offset3" />
                    <feSpecularLighting result="feMerge-spotlight" specularConstant="1" specularExponent="40" lightingColor="red">
                        <fePointLight x="50" y="50" z="50" />
                    </feSpecularLighting>
                    <feComposite in2="feMerge-offset3" in="feMerge-spotlight" operator="atop" k1="0" k2="1" k3="1" k4="0" />

                    <feMerge>
                        <feMergeNode in="feMerge-feGaussianBlur" />
                        <feMergeNode in="feMerge-feDisplacementMap" />
                        <feMergeNode in="feMerge-feDropShadow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <use
                    id="feMerge-icon"
                    href={`#${selectedIcon}`}
                    x="0"
                    y="0"
                    width="45%"
                    height="45%"
                    fill="blue"
                    filter="url(#feMerge-filter)"
                />
            </svg>
        </SVGTag>
    )
}

export default EFeMerge
