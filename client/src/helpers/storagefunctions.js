const jscookie = require('js-cookie')
/*---------------------------
"usertoken" key for token in cookie
"id" key for token
"username" key for token
"email" key for token
---------------------------*/
//storing user details in js local storage
//have to manually delete after logout
export function saveLoginDetails(responseData){
    if(window !== null){
        localStorage.setItem("id",`${responseData.id}`)
        localStorage.setItem("username",`${responseData.username}`)
        localStorage.setItem("email",`${responseData.email}`)
    }
}

//js cookie to store auth token
export function saveToken(responseToken){
    if(window!== undefined){
        jscookie.set("usertoken",`${responseToken}`,{expires:4})
    }
}

//called during login/signin 
//stores user detail and auth token
export function authenticate(response,next){
    saveToken(response.data.token)
    saveLoginDetails(response.data.user)
    next()
}

//check for login/signin
export function isSignedIn(){
    var authtoken = jscookie.get('token')
    var username = localStorage.getItem('username')
    var id = localStorage.getItem('id')
    var email= localStorage.getItem('email')
    if(authtoken === null || username=== null || id=== null || email=== null){
        return false
    }else{
        return true
    }
}

//name extraction
export function getUserName(){
    return localStorage.getItem('username')
}

//remove cookie and local storage info 
export function logout(){
    
    jscookie.remove('usertoken')
    localStorage.removeItem('id')
    localStorage.removeItem('username')
    localStorage.removeItem('email')

}

