import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'
import { getElemAttr } from '../utils'

type Props = {
    selectedIcon: string
}

const ETextPath: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="textPath" subTags={['tspan']}>
            <svg viewBox="0 0 100 100">
                <style>{`#textPath-symbol tspan {fill: red;}`}</style>
                <symbol id="textPath-symbol" viewBox={getElemAttr(selectedIcon, 'viewBox') ?? ''}>
                    <text style={{ fontSize: '10px' }}>
                        <textPath href={`#${selectedIcon}-path`}>
                            <tspan>Lorem</tspan> ipsum dolor sit amet, <tspan>consectetur</tspan> adipiscing elit. Sed mollis
                            mollis mi ut ultricies. Nullam magna ipsum, porta vel dui <tspan>convallis</tspan>, rutrum imperdiet
                            eros. Aliquam erat volutpat. <tspan>Lorem</tspan> ipsum dolor sit amet, <tspan>consectetur</tspan>
                            adipiscing elit. Sed mollis mollis mi ut ultricies. Nullam magna ipsum, porta vel dui{' '}
                            <tspan>convallis</tspan>, rutrum imperdiet eros. Aliquam erat volutpat.
                            <tspan>Lorem</tspan> ipsum dolor sit amet, <tspan>consectetur</tspan> adipiscing elit. Sed mollis
                            mollis mi ut ultricies. Nullam magna ipsum, porta vel dui <tspan>convallis</tspan>, rutrum imperdiet
                            eros. Aliquam erat volutpat. <tspan>Lorem</tspan> ipsum dolor sit amet, <tspan>consectetur</tspan>
                            adipiscing elit. Sed mollis mollis mi ut ultricies. Nullam magna ipsum, porta vel dui{' '}
                            <tspan>convallis</tspan>, rutrum imperdiet eros. Aliquam erat volutpat.
                            <tspan>Lorem</tspan> ipsum dolor sit amet, <tspan>consectetur</tspan> adipiscing elit. Sed mollis
                            mollis mi ut ultricies. Nullam magna ipsum, porta vel dui <tspan>convallis</tspan>, rutrum imperdiet
                            eros. Aliquam erat volutpat. <tspan>Lorem</tspan> ipsum dolor sit amet, <tspan>consectetur</tspan>
                            adipiscing elit. Sed mollis mollis mi ut ultricies. Nullam magna ipsum, porta vel dui{' '}
                            <tspan>convallis</tspan>, rutrum imperdiet eros. Aliquam erat volutpat.
                        </textPath>
                    </text>
                </symbol>

                <use href="#textPath-symbol" width="100%" height="100%" x="0" y="0" fill="black" />
                <use href={`#${selectedIcon}`} width="100%" height="100%" x="0" y="0" stroke="blue" fill="none" />
            </svg>
        </SVGTag>
    )
}

export default ETextPath
