import React, { Component } from 'react';

const MdInput = (props) => {
  return (<textarea onChange={props.changed}>{props.value}</textarea>);
}
 
export default MdInput;