import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List'

class App extends Component {

  state = {
    users:['ahmed','mohamed','youssef']
  }


  addedUser = (e)=>{
    e.preventDefault()
    let new_user = this.state.users
    // eslint-disable-next-line no-const-assign
    e.target[0].value !=='' ? new_user.push(e.target[0].value) : new_user = this.state.users
    this.setState({
      users:new_user
    })
    e.target[0].value =''
  }

  deleteuser = (index) =>{
    const users = this.state.users
    users.splice(index,1)
    this.setState({users:users})
  }

  updateUser = (index,u) =>{
    const new_user = this.state.users
    new_user[index] = u
    this.setState({users:new_user})
  }
  render(){
    const list = Array.from( this.state.users.map((e,index) => {
      return <List len={this.state.users.length} index={index} user={e} key={index} deleteuser={this.deleteuser} updateUser={this.updateUser} />
    }))
    
  return (
    <div className="container mt-5">
      <div className='mx-auto'>
      <Form addedUser={this.addedUser}/>
      <ul>

      {list.length !== 0 ? list : <h1 style={{'margin-top':'7%'}}>There are no users currently</h1>}
      </ul>
      </div>
    </div>
  );
  }
}

export default App;
