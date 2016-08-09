import React from "react";
import Title from "./Header/Title";
export default class Header extends React.Component{
  handleChange(e){
<<<<<<< HEAD
    const title = (e).target.value;
    this.props.changeTitle(title);
  }
render(){
    return (
      <div>
      this.props.changeTitle();
<Title title ={this.props.title}/>
<input onChange={this.handleChange.bind(this)} />
=======
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render(){
    return (
      <div>
<Title title ={this.props.title} />
<input value={this.props.title} onChange={this.handleChange.bind(this)}/>
>>>>>>> 43a050e89bbfe4eb03103e58454567b557466066
    </div>
    );
  }
}
