import React from "react";
export default class Layout extends React.Component{
constructor() {
  super();
  this.name = "Tony";
}
  render (){
    return (
      <h1> The name is  {this.name}! The name is who!</h1>
    );
  }
}
