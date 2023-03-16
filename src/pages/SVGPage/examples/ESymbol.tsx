import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const ESymbol: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="symbol">
            <svg viewBox="0 0 100 100">
                <symbol id="symbol" width="10" height="10" viewBox="0 0 2 2">
                    <use href={`#${selectedIcon}`} width="50%" height="50%" x="0" y="0" fill="red"></use>
                    <use href={`#${selectedIcon}`} width="50%" height="50%" x="50%" y="0" fill="green"></use>
                    <use href={`#${selectedIcon}`} width="50%" height="50%" x="0" y="50%" fill="blue"></use>
                    <use href={`#${selectedIcon}`} width="50%" height="50%" x="50%" y="50%" fill="orange"></use>
                </symbol>

                <use x="0" y="0" width="100%" height="100%" href="#symbol"></use>
            </svg>
        </SVGTag>
    )
}

export default ESymbol
