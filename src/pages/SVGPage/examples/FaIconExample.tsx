import React from 'react'
import { faHome, faImage, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import FaIcon from '../../../shared/components/FaIcon'

export const FaIcons = {
    home: faHome,
    image: faImage
}

interface Props extends React.ComponentProps<any> {
    name: IconDefinition
    id: string
}

const FaIconExample: React.FC<Props> = ({ name, id, ...props }: Props) => (
    <svg viewBox="0 0 100 100" className="svg-inline--fa">
        <defs>
            <FaIcon name={name} id={id} {...props} resetFill={true} />
        </defs>

        <use href={`#${id}`} style={{ fill: 'currentColor' }} />
    </svg>
)

export default FaIconExample
