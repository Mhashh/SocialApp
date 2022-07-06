import React from 'react'
import NavMenu from "../components/navmenu"
import {getUserName,isSignedIn,authenticate} from "../helpers/storagefunctions"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
class AccountActivation extends React.Component {
    
    constructor(props){
        super(props)

        this.state={activatedmsg:"Activating account.."}
    }
    componentDidMount(){
        axios({
            method:'POST',
            url:`${process.env.REACT_APP_SERVER_API_LINK}/accountactivation`,
            data:{token:`${this.props.authtoken}`}
        }).then(
            (response)=>{
                this.setState({activatedmsg:"Account activated ,signing and redirecting...."})
                authenticate(response,
                    setTimeout(function() { //Start the timer

                        this.props.navigate('/')
                    }.bind(this), 1000)
                    
                )
            }
        ).catch((err)=>{
            console.log(err.response.data.error)
        })
    }
    
    render() {
      return (
        <div>
          <NavMenu username={getUserName()} isSigned={isSignedIn()}/>
        <div className='card col-4 p-4 mx-auto'>
          
          <h1 className='mx-auto '>{this.state.activatedmsg}</h1>
          
        </div></div>
        
      );
    }
  }

export default function AccountActivationPage(){
    const navigation = useNavigate();
    return <AccountActivation navigate={navigation}/>;
}