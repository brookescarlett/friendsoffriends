import React, { Component } from 'react';

export default class Content extends Component {

    componentDidUpdate = () => {
        let tester = document.getElementById('tester')
        for(let i =0; i <= 1; i += 0.01){
            setTimeout(() => { tester.style.opacity = `${i}`},i*700)
        }
    }

    componentWillUpdate = () => {
        let tester = document.getElementById('tester')
        tester.style.opacity = "0"
    }

    render() {
        return (
            
            <div className="flex flex-column justify-center text-body">
                <p className="my0 title">{this.props.data.title}</p>
                <p className="description">{this.props.data.content}</p>
                <p className="p2 center button small-font caps">{this.props.data.button}</p>
            </div>
            
        );
    }
}
