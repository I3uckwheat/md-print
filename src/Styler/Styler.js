import React, { Component } from 'react';

class Styler extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      font: {
        '--main-font-color': '#333',
        '--secondary-font-color': '#444'
      }
     }

     this.root = document.documentElement;

     this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(cssVariable) {
    return e => {
      const newColor = e.target.value;
      this.setState({font: {cssVariable: newColor}});
      this.root.style.setProperty(cssVariable, newColor);
    }
  }

  render() { 
    return ( 
      <div className="styler">
        <input value={this.state.font['--main-font-color']} onChange={this.handleColorChange('--main-font-color')}></input>
        <input value={this.state.font['--secondary-font-color']} onChange={this.handleColorChange('--secondary-font-color')}></input>
      </div>
    );
  }
}
 
export default Styler;