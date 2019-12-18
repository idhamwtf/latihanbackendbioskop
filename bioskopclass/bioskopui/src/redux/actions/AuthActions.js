import Axios from "axios"
import { APIURL } from "../../support/ApiUrl"

export const LoginSuccessAction=(datauser)=>{
    return{
        type:'LOGIN_SUCCESS',
        payload:datauser
    }
}


export const LogoutSuccessAction=()=>{
    return{
        type:'LOGOUT'
    }
}





export const Loginthunk=(username,password)=>{
    return(dispatch)=>{
        dispatch({type:'LOGIN_LOADING'})
        Axios.get(`${APIURL}users?username=${username}&password=${password}`)
        .then((res)=>{
            if(res.data.length){
                localStorage.setItem('dino',res.data[0].id)
                dispatch(LoginSuccessAction(res.data[0]))
                window.location.reload()
            }else{
                dispatch({type:'LOGIN_ERROR',payload:'Salah masukin password'})
            }
            
        }).catch((err)=>{
            console.log(err)
            dispatch({type:'LOGIN_ERROR',payload:'server error'})
        })
    }
}

export const Login_error=()=>{
    return(dispatch)=>{
        dispatch({type:'LOGIN_ERROR',payload:''})
    }

}