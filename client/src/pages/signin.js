import React from 'react'
import SigninForm from '../components/siginform'
import NavMenu from "../components/navmenu"
import {getUserName,isSignedIn} from "../helpers/storagefunctions"
class SigninPage extends React.Component {
    render() {
      return (
        <div>
          <NavMenu username={getUserName()} isSigned={isSignedIn()}/>
        <div className='card col-4 p-4 float-end'>
          
          <h1 className='mx-auto '>signin</h1>
          <SigninForm/>
        </div></div>
        
      );
    }
  }

export default SigninPage