import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImage, IconDefinition } from '@fortawesome/free-solid-svg-icons'

export const FaIcons = {
    home: faHome,
    image: faImage
}

interface Props extends React.ComponentProps<any> {
    name: IconDefinition
    resetFill?: boolean
}

const FaIcon: React.FC<Props> = ({ name, resetFill, ...props }: Props) => {
    const ref = React.createRef<SVGSVGElement>()
    useEffect(() => {
        const path = ref.current?.querySelector('path')
        if (path) {
            !path.hasAttribute('id') && path.setAttribute('id', `${props.id}-path`)

            resetFill && path.removeAttribute('fill')
        }
    }, [props.id, ref, resetFill])

    return <FontAwesomeIcon icon={name} {...props} ref={ref} />
}

export default FaIcon
