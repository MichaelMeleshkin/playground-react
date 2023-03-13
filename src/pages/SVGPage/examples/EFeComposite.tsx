import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import FaIconExample from './FaIconExample'

type Props = {
    selectedIcon: string
}

const EFeComposite: React.FC<Props> = ({ selectedIcon }: Props) => {
    return (
        <SVGTag name="feComposite">
            <svg viewBox="0 0 100 100">
                <defs>
                    <FaIconExample id="feComposite-static" height="33px" width="33px" fill="blue" name={faPlayCircle} />
                    <use id="feComposite-icon" href={`#${selectedIcon}`} fill="red" width="33px" height="33px" />

                    <filter id="feComposite-over">
                        <feImage href="#feComposite-icon" x="0" y="0" />
                        <feComposite in2="SourceGraphic" operator="over" />
                    </filter>
                    <filter id="feComposite-in">
                        <feImage href="#feComposite-icon" x="0" y="0" />
                        <feComposite in2="SourceGraphic" operator="in" />
                    </filter>
                    <filter id="feComposite-out">
                        <feImage href="#feComposite-icon" x="0" y="0" />
                        <feComposite in2="SourceGraphic" operator="out" />
                    </filter>
                    <filter id="feComposite-atop">
                        <feImage href="#feComposite-icon" x="0" y="0" />
                        <feComposite in2="SourceGraphic" operator="atop" />
                    </filter>
                    <filter id="feComposite-xor">
                        <feImage href="#feComposite-icon" x="0" y="0" />
                        <feComposite in2="SourceGraphic" operator="xor" />
                    </filter>
                    <filter id="feComposite-arithmetic">
                        <feImage href="#feComposite-icon" x="0" y="0" />
                        <feComposite in2="SourceGraphic" operator="arithmetic" k1="0.1" k2="0.2" k3="0.3" k4="0.4" />
                    </filter>
                    <filter id="feComposite-lighter">
                        <feImage href="#feComposite-icon" x="0" y="0" />
                        <feComposite in2="SourceGraphic" operator="lighter" />
                    </filter>
                </defs>
                <use href="#feComposite-static" transform="translate(0,0)" style={{ filter: 'url(#feComposite-over)' }} />
                <use href="#feComposite-static" transform="translate(33,0)" style={{ filter: 'url(#feComposite-in)' }} />
                <use href="#feComposite-static" transform="translate(67,0)" style={{ filter: 'url(#feComposite-out)' }} />
                <use href="#feComposite-static" transform="translate(0,33)" style={{ filter: 'url(#feComposite-atop)' }} />
                <use href="#feComposite-static" transform="translate(33,33)" style={{ filter: 'url(#feComposite-xor)' }} />
                <use href="#feComposite-static" transform="translate(67,33)" style={{ filter: 'url(#feComposite-lighter)' }} />
                <use href="#feComposite-static" transform="translate(0,67)" style={{ filter: 'url(#feComposite-arithmetic)' }} />
            </svg>
        </SVGTag>
    )
}

export default EFeComposite
