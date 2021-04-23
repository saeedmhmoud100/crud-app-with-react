import React, { Component } from 'react';

class Form extends Component {

  
  render(){
  return (
    <form className='form-control input-group' onSubmit={this.props.addedUser}>
      <input placeholder='Add new user...' />
      <button className='btn btn-success'>Add</button>
    </form>
  );
  }
}

export default Form;
