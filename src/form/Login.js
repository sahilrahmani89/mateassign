import React,{useState}from 'react'
import { loginAuthTrueVal, loginForm , errReducer} from '../features/formSlice'
import { useDispatch , useSelector} from 'react-redux'
import axios from 'axios'

const Login = () => {
  // 
  const loginAuthVal = useSelector((state)=>state.form.loginAuthVal)
  const errVal = useSelector((state)=>state.form.errVal)
  // 
  const dispatch = useDispatch()
  // 
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
 
  // 
  const onSubmitHandler = async(e) =>{

    e.preventDefault()
    if(!email || !password ){
      alert('fill the blanks')
    }

    else{
        dispatch(loginForm({
            email:email,
            password:password
        }))

        await axios.post('http://3.140.210.76:8000/api/token/', {
          email: email,
          password:password
        })
        .then((response)=> {
          console.log(response);
          dispatch(errReducer(false))
          dispatch(loginAuthTrueVal(true))  
        })
        .catch(err=>{
          console.log(err)
          dispatch(loginAuthTrueVal(false))
          dispatch(errReducer(true))
        })
        // 
       
        // 
        setemail('')
      setpassword('')
    }
  }
  // 
 
  
  return (
    <>
    <form onSubmit={e=>onSubmitHandler(e)}>
    <input
    type='email'
    placeholder='email'
    id='emailSign'
    value={email}
    onChange ={e=>setemail(e.target.value)}

    />
    <br/>
    <input
    type='password'
    placeholder='password'
    id='password'
    value={password}
    onChange ={e=>setpassword(e.target.value)}
    />

    <br/>
    <button type='submit'>Submit</button>
    </form>
    {/*  */}
   {
     loginAuthVal ? '  Hi, you are logged in!' : ''
   }
   {
     errVal ? 'login Error' : ''
   }
   <br/>
</>
  )
}

export default Login