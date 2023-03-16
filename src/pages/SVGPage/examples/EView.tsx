import React from 'react'
import SVGTag from '../../../shared/components/SVGTag'

const EView: React.FC = () => {
    return (
        <SVGTag name="view">
            <>
                <img src="./svg-example-view.svg" alt="three squares" width="150" height="50" />
                <br />
                <img src="./svg-example-view.svg#view3" alt="lightblue square" width="50" height="50" />
                <img src="./svg-example-view.svg#view1" alt="pink square" width="50" height="50" />
                <img src="./svg-example-view.svg#view2" alt="lightgreen square" width="50" height="50" />
            </>
        </SVGTag>
    )
}

export default EView
