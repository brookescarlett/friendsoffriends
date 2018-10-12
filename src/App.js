import React, { Component } from 'react';

import { data } from './api/data'

import Slider from './components/slider'
import Content from './components/content'

class App extends Component {

  constructor() {
    super()
    this.state = { display: 0 }
  }

  changeDisplay = (num) => {
    this.setState({ display: num })
  }

  renderContent = () =>{
    return data.map(datum => <Content key={datum.title}data={datum} show={data.indexOf(datum) === this.state.display ? true : false} />)
  }

  render() {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 my3">

        <div className="mt3 mb3 fit flex space-between items-stretch container justify-around">
          <div className="ml4 zneg min-h gutter"></div>

          <div className="right z1 min-h slider-container">
            <Slider 
              changeDisplay={this.changeDisplay}
              allData={data}
            />
          </div>    

        </div>

        <div className="absolute top-0 z100 min-h text-container" id="tester">
          {/* {this.renderContent()} */}
          {/* <Content 
            data={} 
            show={data[this.state.display]}
          /> */}
          <Content 
            data={data[this.state.display]}
          />
        </div>  
        
      </div>
    );
  }
}

export default App;
