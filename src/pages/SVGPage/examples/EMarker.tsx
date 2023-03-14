import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EMarker: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="marker">
            <svg viewBox="0 0 100 100">
                <defs>
                    <marker id="marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="0">
                        <use x="0" y="0" width="10%" height="10%" href={`#${selectedIcon}`} />
                    </marker>
                    <marker
                        id="marker-red"
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="4"
                        markerHeight="4"
                        orient="auto-start-reverse"
                    >
                        <use x="0" y="0" width="10%" height="10%" href={`#${selectedIcon}`} fill="red" />
                    </marker>
                </defs>

                <polyline
                    points="10,10 20,20
                            10,30 20,40
                            10,50 20,60
                            10,70 20,80
                            30,90 40,80
                            30,70 40,60
                            30,50 40,40
                            30,30 40,20
                            50,10 60,20
                            50,30 60,40
                            50,50 60,60
                            50,70 60,80
                            70,90 80,80
                            90,90 90,70
                            70,70 70,50
                            90,50 90,30
                            70,30 70,10
                            90,10
                            "
                    fill="none"
                    stroke="grey"
                    markerStart="url(#marker)"
                    markerMid="url(#marker-red)"
                    markerEnd="url(#marker)"
                />
            </svg>
        </SVGTag>
    )
}

export default EMarker
