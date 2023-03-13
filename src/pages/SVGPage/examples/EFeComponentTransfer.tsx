import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

type Props = {
    selectedIcon: string
}

const EFeComponentTransfer: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feComponentTransfer">
            <>
                <p>
                    <em>&lt;feFuncR&gt; &lt;feFuncB&gt; &lt;feFuncG&gt; &lt;feFuncA&gt;</em>
                </p>
                <svg viewBox="0 0 100 100" style={{ minHeight: '150px', minWidth: '150px' }}>
                    <defs>
                        <linearGradient id="rainbow">
                            <stop offset="0" stopColor="#ff0000"></stop>
                            <stop offset="0.2" stopColor="#ffff00"></stop>
                            <stop offset="0.4" stopColor="#00ff00"></stop>
                            <stop offset="0.6" stopColor="#00ffff"></stop>
                            <stop offset="0.8" stopColor="#0000ff"></stop>
                            <stop offset="1" stopColor="#800080"></stop>
                        </linearGradient>
                        <filter id="identity" x="0" y="0" width="100%" height="100%">
                            <feComponentTransfer>
                                <feFuncR type="identity"></feFuncR>
                                <feFuncG type="identity"></feFuncG>
                                <feFuncB type="identity"></feFuncB>
                                <feFuncA type="identity"></feFuncA>
                            </feComponentTransfer>
                        </filter>
                        <filter id="table" x="0" y="0" width="100%" height="100%">
                            <feComponentTransfer>
                                <feFuncR type="table" tableValues="0 0 1 1"></feFuncR>
                                <feFuncG type="table" tableValues="1 1 0 0"></feFuncG>
                                <feFuncB type="table" tableValues="0 1 1 0"></feFuncB>
                            </feComponentTransfer>
                        </filter>
                        <filter id="discrete1" x="0" y="0" width="100%" height="100%">
                            <feComponentTransfer>
                                <feFuncR type="discrete" tableValues="0 0 1 1"></feFuncR>
                                <feFuncG type="discrete" tableValues="1 1 0 0"></feFuncG>
                                <feFuncB type="discrete" tableValues="0 1 1 0"></feFuncB>
                            </feComponentTransfer>
                        </filter>
                        <filter id="discrete2" x="0" y="0" width="100%" height="100%">
                            <feComponentTransfer>
                                <feFuncR type="discrete" tableValues="1 1 0 0"></feFuncR>
                                <feFuncG type="discrete" tableValues="0 0 1 1"></feFuncG>
                                <feFuncB type="discrete" tableValues="1 0 0 1"></feFuncB>
                            </feComponentTransfer>
                        </filter>
                        <filter id="linear1" x="0" y="0" width="100%" height="100%">
                            <feComponentTransfer>
                                <feFuncR type="linear" slope="0.5" intercept="0"></feFuncR>
                                <feFuncG type="linear" slope="0.5" intercept="0.25"></feFuncG>
                                <feFuncB type="linear" slope="0.5" intercept="0.5"></feFuncB>
                            </feComponentTransfer>
                        </filter>
                        <filter id="linear2" x="0" y="0" width="100%" height="100%">
                            <feComponentTransfer>
                                <feFuncR type="linear" slope="0.5" intercept="0.75"></feFuncR>
                                <feFuncG type="linear" slope="0.5" intercept="0.5"></feFuncG>
                                <feFuncB type="linear" slope="0.5" intercept="0.25"></feFuncB>
                            </feComponentTransfer>
                        </filter>
                        <filter id="gamma1" x="0" y="0" width="100%" height="100%">
                            <feComponentTransfer>
                                <feFuncR type="gamma" amplitude="4" exponent="7" offset="0"></feFuncR>
                                <feFuncG type="gamma" amplitude="4" exponent="4" offset="0"></feFuncG>
                                <feFuncB type="gamma" amplitude="4" exponent="1" offset="0"></feFuncB>
                            </feComponentTransfer>
                        </filter>
                        <filter id="gamma2" x="0" y="0" width="100%" height="100%">
                            <feComponentTransfer>
                                <feFuncR type="gamma" amplitude="7" exponent="1" offset="0"></feFuncR>
                                <feFuncG type="gamma" amplitude="7" exponent="4" offset="0"></feFuncG>
                                <feFuncB type="gamma" amplitude="7" exponent="7" offset="0"></feFuncB>
                            </feComponentTransfer>
                        </filter>
                    </defs>
                    <g fontWeight="bold">
                        <use
                            href={`#${selectedIcon}`}
                            x="0"
                            y="0"
                            width="33%"
                            height="33%"
                            style={{ fill: 'url(#rainbow)' }}
                        ></use>
                        <use
                            href={`#${selectedIcon}`}
                            x="33%"
                            y="0"
                            width="33%"
                            height="33%"
                            style={{ fill: 'url(#rainbow)', filter: 'url(#identity)' }}
                        />
                        <use
                            href={`#${selectedIcon}`}
                            x="67%"
                            y="0"
                            width="33%"
                            height="33%"
                            style={{ fill: 'url(#rainbow)', filter: 'url(#table)' }}
                        />
                        <use
                            href={`#${selectedIcon}`}
                            x="0"
                            y="33%"
                            width="33%"
                            height="33%"
                            style={{ fill: 'url(#rainbow)', filter: 'url(#discrete1)' }}
                        />
                        <use
                            href={`#${selectedIcon}`}
                            x="33%"
                            y="33%"
                            width="33%"
                            height="33%"
                            style={{ fill: 'url(#rainbow)', filter: 'url(#linear1)' }}
                        />
                        <use
                            href={`#${selectedIcon}`}
                            x="67%"
                            y="33%"
                            width="33%"
                            height="33%"
                            style={{ fill: 'url(#rainbow)', filter: 'url(#gamma1)' }}
                        />

                        <use
                            href={`#${selectedIcon}`}
                            x="0"
                            y="67%"
                            width="33%"
                            height="33%"
                            style={{ fill: 'url(#rainbow)', filter: 'url(#discrete2)' }}
                        />
                        <use
                            href={`#${selectedIcon}`}
                            x="33%"
                            y="67%"
                            width="33%"
                            height="33%"
                            style={{ fill: 'url(#rainbow)', filter: 'url(#linear2)' }}
                        />
                        <use
                            href={`#${selectedIcon}`}
                            x="67%"
                            y="67%"
                            width="33%"
                            height="33%"
                            style={{ fill: 'url(#rainbow)', filter: 'url(#gamma2)' }}
                        />
                    </g>
                </svg>
            </>
        </SVGTag>
    )
}

export default EFeComponentTransfer
