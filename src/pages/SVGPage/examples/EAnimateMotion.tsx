import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const ELink: React.FC<Props> = ({ selectedIcon }: Props) => {
    function getElemAttr(id: string, attr: string): string | null | undefined {
        return document.querySelector(`#${id}`)?.getAttribute(attr)
    }

    function viewBoxPadding(viewBox: string): string {
        const [x, y, width, height] = viewBox.split(' ').map((v) => parseInt(v))
        const w = Math.round(width / 10)
        const h = Math.round(height / 10)
        return [x - h, y - w, width + 2 * w, height + 2 * h].join(' ')
    }

    function viewBoxToParams(viewBox: string): { x: string; y: string; height: string; width: string } {
        const [x, y, width, height] = viewBox.split(' ')
        return { x, y, width, height }
    }

    return (
        <SVGTag name="animateMotion">
            <svg viewBox={viewBoxPadding(getElemAttr(selectedIcon, 'viewBox') ?? '')}>
                <use {...viewBoxToParams(getElemAttr(selectedIcon, 'viewBox') ?? '')} fill="none" href={`#${selectedIcon}`} />
                <g id="animateMotion-circle-group">
                    <circle r="42" fill="red"></circle>
                    <circle r="20" fill="white"></circle>
                </g>
                <animateMotion href="#animateMotion-circle-group" dur="5s" repeatCount="indefinite">
                    <mpath href={`#${selectedIcon}-path`}></mpath>
                </animateMotion>
            </svg>
        </SVGTag>
    )
}

export default ELink
