import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EPattern: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="pattern">
            <svg viewBox="0 0 100 100">
                <defs>
                    <pattern id="pattern" viewBox="0,0,10,10" width="10%" height="10%">
                        <use x="0" y="0" width="10%" height="10%" href={`#${selectedIcon}`} />
                    </pattern>
                </defs>

                <use x="0" y="0" width="100%" height="100%" href={`#${selectedIcon}`} fill="url(#pattern)" />
            </svg>
        </SVGTag>
    )
}

export default EPattern
