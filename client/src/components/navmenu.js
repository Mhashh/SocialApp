import React from 'react'
import {Link} from 'react-router-dom'
import {isSignedIn,logout} from '../helpers/storagefunctions'
//navigation bar

class NavMenu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      loggedIn:false
    }
    this.handleOnLogout = this.handleOnLogout.bind(this)
  }
  componentDidMount(){
    console.log(this.state.loggedIn)
    this.setState({
      loggedIn:this.props.isSigned
    })
  }
  

  handleOnLogout(){
    logout()
    this.setState({
      loggedIn:false
    })
  }
  

  render(){
    return (
      <nav className='d-flex flex-row'>
      
        <ul className="nav flex-grow-1">
          <li className='nav-item'><Link className="nav-link" to="/">Home</Link></li>
          {!this.state.loggedIn && <li className='nav-item'><Link className="nav-link" to="/signin">signin</Link></li>}
          {!this.state.loggedIn &&<li className='nav-item'><Link className="nav-link" to="/signup">signup</Link></li>}
        </ul>

      

        {this.state.loggedIn &&
          <ul className="nav flex-grow-6">
          <li className='nav-item'><Link className="nav-link" to="/">{this.props.username}</Link></li>
          <li className='nav-item'><Link className="nav-link" onClick={this.handleOnLogout} to="/">logout</Link></li>
          </ul>
        }

      
        

      </nav>
    )
  }
}

export default NavMenu;
