/* eslint-disable no-unused-vars */
import React from 'react'

class List extends React.Component{

  state={
    isEdit:false
  }


  toggleEdit = () =>{
    let {isEdit} = this.state
    this.setState({
      isEdit:!isEdit
    })
  }
  updatel = (e) =>{
    const new_user = e.target[0].value

    this.toggleEdit()
    return new_user
  }

  list(){
    return(
      <div className="list-item" >
              <div className='text'>
              {this.props.user}
              </div>
              <div className='buttons'>
              <button onClick={e =>{this.toggleEdit()}} className='btn-success'>edit</button>
              <button onClick={e => {this.props.deleteuser(this.props.index)}} className=' btn-danger'>Delete</button>
              </div>
          </div>
        )
  }
  updateList(){
    return(
      <div className="list-item" >
              <form onSubmit={(e) =>{this.props.updateUser(this.props.index,this.updatel(e))}}>
                <input style={{'height':'38px','width':'60%'}} defaultValue={this.props.user} />
                
                <div className='buttons'>
                <button style={{'height':'38px','width':'68%'}} className=' btn-success'>Update</button>
                </div>
              </form>
          </div>
        )
  }
    render(){
    return(
        this.state.isEdit ? this.updateList() : this.list()
    )
    }
}
export default List