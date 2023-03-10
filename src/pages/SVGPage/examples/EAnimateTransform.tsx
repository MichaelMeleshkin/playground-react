import React, { useEffect, useState } from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EAnimateTransform: React.FC<Props> = ({ selectedIcon }: Props) => {
    const [config, setConfig] = useState<{ type: string; values: string } | null>()

    useEffect(() => {
        const configs = [
            { type: 'scale', values: '1;0;1' },
            { type: 'skewX', values: '0;180;0' },
            { type: 'skewY', values: '180;0;180' },
            { type: 'rotate', values: '0 60 60; 360 60 60' }
        ]

        setConfig(configs[configs.length - 1])

        const interval = setInterval(() => {
            const config = configs.shift()
            config && configs.push(config)
            setConfig(config)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <SVGTag name="animateTransform">
            <>
                <p>
                    <em>
                        This feature supported only in latest versions of browsers,&nbsp;
                        <a target="_blank" rel="noreferrer" href="https://caniuse.com/mdn-svg_elements_animatetransform">
                            more info here
                        </a>
                    </em>
                </p>
                <div className="d-flex">
                    {config && (
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <use id="animateTransform-icon" href={`#${selectedIcon}`} />
                            <animateTransform
                                attributeName="transform"
                                type={config.type}
                                values={config.values}
                                dur="5s"
                                repeatCount="indefinite"
                                href="#animateTransform-icon"
                            />
                        </svg>
                    )}
                </div>
            </>
        </SVGTag>
    )
}

export default EAnimateTransform
