import React from 'react';
import Markdown from 'react-markdown';

const MdOutput = props => {
  return (
    <div className="md-output">
      <Markdown source={props.value}></Markdown>
    </div>
  );
}
 
export default MdOutput;
