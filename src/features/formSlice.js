import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
    login:false,
    loginAuthVal:false,
    errVal:false,
    signUpData:{
      email_:'',
      password_:'',
      first_name:'',
      last_name:''
    },
    loginData:{
      email_:'',
      password_:""
    },
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    
    loginBool:(state,action)=>{
        state.login=action.payload
    },
    loginAuthTrueVal:(state,action)=>{
      state.loginAuthVal=action.payload
    }, 
    errReducer:(state,action)=>{
      state.errVal = action.payload
    },
    signUpForm:(state,action)=>{
        state.signUpData={
          first_name:action.payload.firstName,
          last_name:action.payload.lastName,
          email_:action.payload.email,
          password_:action.payload.password
        }
    },
    loginForm:(state,action)=>{
      state.loginData={
        email_:action.payload.email,
        password_:action.payload.password
      }
    }
  },
  
})

// Action creators are generated for each case reducer function
export const {loginBool,signUpForm,loginForm,loginAuthTrueVal, errReducer} = formSlice.actions

export default formSlice.reducer