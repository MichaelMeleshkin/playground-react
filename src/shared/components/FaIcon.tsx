import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImage, IconDefinition } from '@fortawesome/free-solid-svg-icons'

export const FaIcons = {
    home: faHome,
    image: faImage
}

interface Props extends React.ComponentProps<any> {
    name: IconDefinition
}

const FaIcon: React.FC<Props> = ({ name, ...props }: Props) => {
    const ref = React.createRef<SVGSVGElement>()
    useEffect(() => {
        ref.current?.querySelector('path')?.setAttribute('id', `${props.id}-path`)
    }, [props.id, ref])

    return <FontAwesomeIcon icon={name} {...props} ref={ref} />
}

export default FaIcon
