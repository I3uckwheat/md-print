import React from 'react';
import Markdown from 'react-markdown';

const MdOutput = props => {
  return (
    <div>
      <Markdown source={props.value}></Markdown>
    </div>
  );
}
 
export default MdOutput;
