import React, { ReactElement } from 'react'

type Props = {
    name: string
    children: ReactElement
}

const SVGTag: React.FC<Props> = ({ name, children }: Props) => (
    <>
        <p className="text-monospace h5">&lt;{name}&gt;</p>
        {children}
    </>
)

export default SVGTag
