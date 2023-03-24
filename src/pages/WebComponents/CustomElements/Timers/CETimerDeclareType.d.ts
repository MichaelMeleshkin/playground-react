import * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ce-timer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
        }
    }
}
