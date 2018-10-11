import React, { Component } from 'react'
import Flickity from 'react-flickity-component'
import Slide from './slide'

var flickityOptions = {
    "freeScroll": false, "contain": true, "prevNextButtons": true, "pageDots": false, "draggable": false, "accessibility": true, "arrowShape": { x0: 10, x1: 65, y1: 45, x2: 70, y2: 40, x3: 20 }, "wrapAround": true
}


export default class Slider extends Component {

    componentDidMount = () => {
        this.flkty.on('change', () => {
            this.props.changeDisplay(this.flkty.selectedIndex)
        })
    }

    createSlides = () => {
        return this.props.allData.map(datum => {
            return <Slide key={datum.title} slug={datum.slug} />
        })
    }

    render() {
        return (
            <div className="slider">
                <Flickity 
                    options={flickityOptions} 
                    flickityRef={c => this.flkty = c}>

                    { this.createSlides() }

                </Flickity>
            </div>
        )
    }
}
