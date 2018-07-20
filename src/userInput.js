import React, { Component } from 'react';
class Input extends Component {
    handleChange=(event)=> {
      this.props.handleChanges(event.target.value);
    }
    handleSubmit=(event) =>{
      event.preventDefault();
      if(navigator.onLine)
      this.props.handleSubmits();
      else
      document.getElementById("userNotFound").innerHTML="Please,check your internet connection"
      
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
           Git hub Name :
            <input type="text" value={this.props.value} onChange={this.handleChange} disabled = {(this.props.disabled)? "disabled" : "" }/>
          </label>
        </form>
      );
    }
  }

  export default Input;