import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const ELink: React.FC<Props> = ({ selectedIcon }: Props) => {
    const keyTimes = '0; 0.16; 0.33; 0.5; 0.66; 0.83; 1'
    return (
        <SVGTag name="animate">
            <svg viewBox="0 0 10 10">
                <use id="animate-icon" href={`#${selectedIcon}`} />
                <animate
                    attributeName="width"
                    values="10;2;2;2;2;2;10"
                    keyTimes={keyTimes}
                    dur="5s"
                    repeatCount="indefinite"
                    href="#animate-icon"
                />
                <animate
                    attributeName="height"
                    values="10;2;2;2;2;2;10"
                    keyTimes={keyTimes}
                    dur="5s"
                    repeatCount="indefinite"
                    href="#animate-icon"
                />
                <animate
                    attributeName="x"
                    values="0;0;8;8;0;0;0"
                    keyTimes={keyTimes}
                    dur="5s"
                    repeatCount="indefinite"
                    href="#animate-icon"
                />
                <animate
                    attributeName="y"
                    values="0;0;0;8;8;0;0"
                    keyTimes={keyTimes}
                    dur="5s"
                    repeatCount="indefinite"
                    href="#animate-icon"
                />
                <animate
                    attributeName="fill"
                    values="white;red;orange;yellow;green;blue;indigo;violet"
                    dur="10s"
                    repeatCount="indefinite"
                    href="#animate-icon"
                />
            </svg>
        </SVGTag>
    )
}

export default ELink
