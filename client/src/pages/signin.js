import React from 'react'
import SigninForm from '../components/siginform'

class SigninPage extends React.Component {

    render() {
      return (
        <div className='card col-4 p-4 float-end'>
          <h1 className='mx-auto '>signin</h1>
          <SigninForm />
        </div>
        
      );
    }
  }

export default SigninPage