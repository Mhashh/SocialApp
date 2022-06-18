import React from 'react'
import axios from 'axios'

class SigninForm extends React.Component{

    constructor(){
        super()
        this.state={
            password:"",
            email:"",
            buttonmsg:"signin"
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleOnPost = this.handleOnPost.bind(this)
    }

    handleEmailChange(event){
        this.setState({email:event.target.value})
        console.log(this.state.email)
    }

    handlePasswordChange(event){
        this.setState({password:event.target.value})
        console.log(this.state.password)
    }

    handleOnPost(event) {

        event.preventDefault()
        axios({
                method:'POST',
                url:`${process.env.REACT_APP_SERVER_API_LINK}/signin`,
                data:{email:`${this.state.email}`,password:`${this.state.password}`}
            }
        ).then((response) => {
            console.log(response.data);
          }).catch((err)=>{
            console.error(err)
          });
      }
    

    render(){
        return(
            <form className='form m-5'>
                <div className='form-group row  justify-content-center p-4'>
                   
                    <label className='col-form-label col-4'>
                        email: 
                    </label>
                    <div className='col-8'>
                    <input type="email" name="emailid" className='form-control col-sm-4' onChange={this.handleEmailChange} />
                     </div>
               
                </div>
                <div className='form-group row  justify-content-center  p-4'>
                    
                    <label className='form-label col-4'>
                        password: </label>
                        <div className='col-8'>
                    <input type="password" onChange={this.handlePasswordChange} name="password" className='form-control'/>
                    </div>
                </div>
                <div className='form-group row  justify-content-center mt-4'>
                    <div className='col-4'>
                        <button onClick={this.handleOnPost} name="submit" className='form-control'>{this.state.buttonmsg}</button>
                    </div>
                </div>
            </form>
            )
    }
}

export default SigninForm