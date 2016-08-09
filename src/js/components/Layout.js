import React from "react";
import Header from "./Header";
import Footer from "./Footer";


export default class Layout extends React.Component{
<<<<<<< HEAD
constructor (){
=======
constructor(){
>>>>>>> 43a050e89bbfe4eb03103e58454567b557466066
  super();
  this.state = {
    title: "Welcome",
  };
}
<<<<<<< HEAD
changeTitle(title) {
      this.setState({title});
}
  render (){
    setTimeout(() => {
        this.setState({title: "Welcome Will"})
      }, 2000);
    return (
    <div>
    <Header changeTitl{this.changeTitle.bind(this)} title ={this.props.title}/>
      <Header title={"Other Title"}/>
=======
changeTitle(title){
  this.setState({title});
}
render (){
return (
    <div>
    <Header changeTitle={this.changeTitle.bind(this)} title ={this.state.title} />
>>>>>>> 43a050e89bbfe4eb03103e58454567b557466066
    <Footer />
    </div>
    );
  }
}
