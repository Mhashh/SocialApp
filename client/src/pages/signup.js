import React from 'react'
import NavMenu from "../components/navmenu"
import {getUserName,isSignedIn} from "../helpers/storagefunctions"
import SignupForm from '../components/signupform'
class SignupPage extends React.Component {
    render() {
      return (
        <div>
          <NavMenu username={getUserName()} isSigned={isSignedIn()}/>
          <div className='card col-4 p-4 mx-auto'>
          
          <h1 className='mx-auto '>signup</h1>
          <SignupForm/>
        </div>
        </div>
      );
    }
  }

export default SignupPage