import React, { Component } from 'react';


export default class Content extends Component {
    render() {
        return (
            <div className="ml4 flex flex-column justify-center">
                <p className="h1 mt0">{this.props.data.title}</p>
                <p className="m0">{this.props.data.content}</p>
                <p className="p2 center button caps">{this.props.data.button}</p>
            </div>
        );
    }
}
