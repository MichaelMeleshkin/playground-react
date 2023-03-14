import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EForeignObject: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="foreignObject">
            <svg viewBox="0 0 100 100">
                <style>{`#foreignObject-foreignObject div {color: white; font: 8px serif; height: 100%; overflow: auto; text-shadow: 0 0 1px black}`}</style>

                <use x="0" y="0" width="100%" height="100%" href={`#${selectedIcon}`} />
                <foreignObject id="foreignObject-foreignObject" x="10" y="10" width="90" height="90">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis mi ut ultricies. Nullam magna
                        ipsum, porta vel dui convallis, rutrum imperdiet eros. Aliquam erat volutpat.
                    </div>
                </foreignObject>
            </svg>
        </SVGTag>
    )
}

export default EForeignObject
