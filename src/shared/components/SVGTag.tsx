import React, { ReactElement } from 'react'

type Props = {
    name: string
    subTags?: string[]
    children: ReactElement
}

const SVGTag: React.FC<Props> = ({ name, subTags, children }: Props) => (
    <>
        <p className="text-monospace h5">&lt;{name}&gt;</p>
        {subTags && (
            <p>
                {subTags.map((tag) => (
                    <em key={tag}>&lt;{tag}&gt;&nbsp;</em>
                ))}
            </p>
        )}
        {children}
    </>
)

export default SVGTag
