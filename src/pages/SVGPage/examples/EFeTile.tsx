import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeTile: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feTile">
            <svg viewBox="0 0 100 100">
                <defs>
                    <filter id="feTile-filter" x="0" y="0" width="100%" height="100%">
                        <feTile in="SourceGraphic" x="0" y="0" width="100%" height="100%" />
                    </filter>
                </defs>

                <use x="0" y="0" width="20%" height="20%" href={`#${selectedIcon}`} filter="url(#feTile-filter)" />
            </svg>
        </SVGTag>
    )
}

export default EFeTile
