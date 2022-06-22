import React from 'react'
import NavMenu from "../components/navmenu"
import {getUserName,isSignedIn} from "../helpers/storagefunctions"
class SignupPage extends React.Component {
    render() {
      return (
        <div>
          <NavMenu username={getUserName()} isSigned={isSignedIn()}/>
          <h1>signup</h1>
        </div>
      );
    }
  }

export default SignupPage