import React, { Component } from 'react';
import { animator, reset } from '../helpers/animate'

export default class Content extends Component {

    componentDidUpdate = () => {
        animator()
    }

    componentWillUpdate = () => {
        reset()
    }

    render() {
        return (
            
            <div className="flex flex-column justify-center text-body animate">
                <p className="my0 title">{this.props.data.title}</p>
                <p className="description">{this.props.data.content}</p>
                <p className="p2 center button small-font caps">{this.props.data.button}</p>
            </div>
            
        );
    }
}
