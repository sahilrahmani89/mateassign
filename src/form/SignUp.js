import React,{useState,useEffect} from 'react'
import { signUpForm } from '../features/formSlice'
import { useDispatch } from 'react-redux'
import  axios from 'axios'
// 
// http://3.140.210.76:8000/api/user/


const SignUp = () => {
  // 
  const dispatch = useDispatch() 
  // 
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [text, settext] = useState('')


  // 
  const passwordHandler =e=>{
    setpassword(e.target.value) 
    if(password.length<6){
      settext('password with more than 6 character')
    }
    
    else{
      settext('ok')
    }
  }
  // 
  useEffect(() => {
    if(password.length===0){
      settext('')
    }

    

  }, [password.length])
  
  // 
  const signUpHandler = async(e)=>{
    e.preventDefault()
    if(! firstName || ! lastName  || ! email || !password){
      alert('fill all the blanks')
    }

   else{
     dispatch(signUpForm({
       firstName:firstName,
       lastName:lastName,
       email:email,
       password:password
     }))
     
     await axios.post("http://3.140.210.76:8000/api/user/",{
        first_name:firstName,
        last_name:lastName,
        email: email,
        password:password
      }).then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch( (error) =>{
        console.log(error);
      });
   }
  }
  // 
  return (
    <>
    <form onSubmit={e=>signUpHandler(e)}>
    <input
    type='text'
    placeholder='first name'
    id='firstName'
    value={firstName}
    onChange ={e=>setfirstName(e.target.value)}

    />
    <br/>
    <input
    type='text'
    placeholder='last name'
    id='lastName'
    value={lastName}
    onChange ={e=>setlastName(e.target.value)}
    />
    <br/>
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
    onChange ={e=>passwordHandler(e)}
    
    />
    {text}
    <br/>
    <button type='submit'>Submit</button>
    </form>

    
    </>

  )
}

export default SignUp