import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EA: React.FC<Props> = ({ selectedIcon }: Props) => (
    <SVGTag name="a">
        <svg viewBox="0 0 100 100">
            <a href="/">
                <use href={`#${selectedIcon}`} />
            </a>
        </svg>
    </SVGTag>
)

export default EA
