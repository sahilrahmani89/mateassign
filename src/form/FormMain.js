import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginBool } from '../features/formSlice'
import SignUp from './SignUp'
import Login from './Login'

const FormMain = () => {
  const dispatch = useDispatch()
    const login = useSelector((state)=>state.form.login)
    // 
    const eventHandler = (e) =>{
        e.preventDefault()
        login ? dispatch(loginBool(false)) : dispatch(loginBool(true))  
    }
    // 
  return (<>
    { login ? <Login/> : <SignUp/>}
    waint to 
    <button onClick={e=>eventHandler(e)}>{login ? 'SignUp':'Login'}</button>
    </>
  )
}

export default FormMain