import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EG: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="g">
            <svg viewBox="0 0 100 100">
                <defs>
                    <use id="group-icon" width="10%" height="10%" href={`#${selectedIcon}`} />
                    <g id="group1">
                        <use x="0" y="0" href="#group-icon" fill="red" />
                        <use x="10%" y="0" href="#group-icon" fill="orange" />
                        <use x="0" y="10%" href="#group-icon" fill="green" />
                        <use x="10%" y="10%" href="#group-icon" fill="violet" />
                    </g>
                    <g id="group2">
                        <use x="0" y="0" href="#group1" fill="red" />
                        <use x="20%" y="0" href="#group1" fill="orange" />
                        <use x="0" y="20%" href="#group1" fill="green" />
                        <use x="20%" y="20%" href="#group1" fill="violet" />
                    </g>
                </defs>

                <use x="0" y="0" width="50%" height="50%" href="#group2" />
                <use x="50%" y="0" width="50%" height="50%" href="#group2" />
                <use x="0" y="50%" width="50%" height="50%" href="#group2" />
                <use x="50%" y="50%" width="50%" height="50%" href="#group2" />
            </svg>
        </SVGTag>
    )
}

export default EG
