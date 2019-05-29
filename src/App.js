import React, { Component } from 'react';
import './App.css';

import MdInput from './Md/MdInput';
import MdOutput from './Md/MdOutput';
import Styler from './Styler/Styler';

const initialSource = `
# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markDown: initialSource
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({markDown: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className='md-wrapper'>
          <MdInput value={this.state.markDown} changed={this.handleInput}></MdInput>
          <MdOutput value={this.state.markDown}></MdOutput>
        </div>
        <Styler></Styler>
      </div>
    );
  }
}

export default App;
