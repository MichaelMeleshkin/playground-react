import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImage, IconDefinition } from '@fortawesome/free-solid-svg-icons'

export const FaIcons = {
    home: faHome,
    image: faImage
}

type Props = {
    name: IconDefinition
    className?: string
}

const FaIcon: React.FC<Props> = ({ name, className }: Props) => {
    return <FontAwesomeIcon className={className} icon={name} />
}

export default FaIcon
