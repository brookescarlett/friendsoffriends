import React, { Component } from 'react';

import maya from '../images/maya.jpg'
import alejandra from '../images/alejandra.jpg'
import julia from '../images/julia.jpg'

export default class Slide extends Component {

    constructor() {
        super()
        this.state = {displayImg: maya}
    }

    componentDidMount = () => {
        switch(this.props.slug) {
            case "maya":
                return this.setState({ displayImg: maya })
            case "alejandra":
                return this.setState({ displayImg: alejandra }) 
            case "julia":
                return this.setState({ displayImg: julia })
            default: 
                return null;
        }
    }


    
    render() {
        return (

            <div
                className="zneg carousel-cell"
                style={{ backgroundImage: `url(${this.state.displayImg})`, backgroundColor: "rgb(239, 239, 239)" }}>

                <div className="relative right flex side-text">
                    <p className="caps h6">Our Classic Shapes</p>
                    <div className="line"></div>
                </div>
            </div>

        );
    }
}
