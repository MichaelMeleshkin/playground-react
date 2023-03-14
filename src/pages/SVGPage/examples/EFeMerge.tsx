import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeMerge: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feMerge">
            <>
                <p>
                    &lt;feMergeNode&gt;
                    <em></em>
                </p>
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
                        <feDropShadow in="feMerge-offset3" dx="-1" dy="-2" stdDeviation="0.5" result="feMerge-feDropShadow" />

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
            </>
        </SVGTag>
    )
}

export default EFeMerge
