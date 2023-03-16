import React from 'react'

const HtmlEffects: React.FC = () => {
    return (
        <div style={{ width: '50%' }}>
            <svg width="0" height="0">
                <clipPath id="html-clipping-path1" clipPathUnits="objectBoundingBox">
                    <polyline points="0.5,0 1,0.5 0.5,1 0,0.5 0.5,0" />
                </clipPath>
                <filter id="html-feGaussianBlur" x="0" y="0">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                </filter>
                <filter id="html-feConvolveMatrix">
                    <feConvolveMatrix kernelMatrix="1 0 0 0 0 0 0 0 -1" />
                </filter>
                <filter id="html-feDisplacementMap">
                    <feTurbulence type="turbulence" baseFrequency="0.5" numOctaves="2" result="turbulence" />
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
            <div style={{ clipPath: 'url(#html-clipping-path1)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida at ex at consequat. Aliquam tortor dolor,
                hendrerit sit amet vehicula vel, feugiat id velit. Morbi suscipit neque in nunc egestas, quis sagittis dui
                vulputate. Sed volutpat scelerisque neque facilisis viverra. Sed ac dignissim mauris. Nulla eget augue sagittis,
                tempus justo quis, commodo mi. Nam sit amet ex eget odio ultrices fringilla. Phasellus nibh velit, gravida vel
                felis in, hendrerit lacinia libero. Sed eget eros vel nisl malesuada vehicula. Proin eros ex, lacinia vel felis
                id, luctus commodo purus. Cras et purus vel odio dignissim pretium a a tellus. Pellentesque blandit bibendum erat.
                Donec dapibus libero pretium ligula imperdiet facilisis. Nunc sit amet est at ipsum elementum finibus ut eget
                dolor. Curabitur pretium laoreet eleifend.
            </div>
            <div style={{ filter: 'url(#html-feGaussianBlur)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida at ex at consequat. Aliquam tortor dolor,
                hendrerit sit amet vehicula vel, feugiat id velit. Morbi suscipit neque in nunc egestas, quis sagittis dui
                vulputate. Sed volutpat scelerisque neque facilisis viverra. Sed ac dignissim mauris. Nulla eget augue sagittis,
                tempus justo quis, commodo mi. Nam sit amet ex eget odio ultrices fringilla. Phasellus nibh velit, gravida vel
                felis in, hendrerit lacinia libero. Sed eget eros vel nisl malesuada vehicula. Proin eros ex, lacinia vel felis
                id, luctus commodo purus. Cras et purus vel odio dignissim pretium a a tellus. Pellentesque blandit bibendum erat.
                Donec dapibus libero pretium ligula imperdiet facilisis. Nunc sit amet est at ipsum elementum finibus ut eget
                dolor. Curabitur pretium laoreet eleifend.
            </div>
            <div style={{ filter: 'url(#html-feConvolveMatrix)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida at ex at consequat. Aliquam tortor dolor,
                hendrerit sit amet vehicula vel, feugiat id velit. Morbi suscipit neque in nunc egestas, quis sagittis dui
                vulputate. Sed volutpat scelerisque neque facilisis viverra. Sed ac dignissim mauris. Nulla eget augue sagittis,
                tempus justo quis, commodo mi. Nam sit amet ex eget odio ultrices fringilla. Phasellus nibh velit, gravida vel
                felis in, hendrerit lacinia libero. Sed eget eros vel nisl malesuada vehicula. Proin eros ex, lacinia vel felis
                id, luctus commodo purus. Cras et purus vel odio dignissim pretium a a tellus. Pellentesque blandit bibendum erat.
                Donec dapibus libero pretium ligula imperdiet facilisis. Nunc sit amet est at ipsum elementum finibus ut eget
                dolor. Curabitur pretium laoreet eleifend.
            </div>
            <div style={{ filter: 'url(#html-feDisplacementMap)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida at ex at consequat. Aliquam tortor dolor,
                hendrerit sit amet vehicula vel, feugiat id velit. Morbi suscipit neque in nunc egestas, quis sagittis dui
                vulputate. Sed volutpat scelerisque neque facilisis viverra. Sed ac dignissim mauris. Nulla eget augue sagittis,
                tempus justo quis, commodo mi. Nam sit amet ex eget odio ultrices fringilla. Phasellus nibh velit, gravida vel
                felis in, hendrerit lacinia libero. Sed eget eros vel nisl malesuada vehicula. Proin eros ex, lacinia vel felis
                id, luctus commodo purus. Cras et purus vel odio dignissim pretium a a tellus. Pellentesque blandit bibendum erat.
                Donec dapibus libero pretium ligula imperdiet facilisis. Nunc sit amet est at ipsum elementum finibus ut eget
                dolor. Curabitur pretium laoreet eleifend.
            </div>
        </div>
    )
}

export default HtmlEffects
