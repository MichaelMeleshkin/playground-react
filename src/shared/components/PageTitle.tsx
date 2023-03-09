import React from 'react'

type Props = {
    text: string
}

const PageTitle: React.FC<Props> = ({ text }: Props) => <h1 style={{ fontSize: '4em' }}>{text}</h1>

export default PageTitle
