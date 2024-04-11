import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Backdrop, Box, Button, FormControl, FormControlLabel, IconButton, InputLabel, OutlinedInput, Paper, Radio, RadioGroup, Typography,  } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment';
import {

  Stack,
  TextField,
  Tooltip,
} from "@mui/material";



import "../App.css";


import axios from 'axios';
import LoginIcon from '@mui/icons-material/Login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 100,
    color: '#fff',
  },
}));
const Page2 = () => {
 
  const navigate = useNavigate();
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'email') {
  //     setEmail(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   }
  // };
  // const handleChange2 = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'email') {
  //     setAdminemail(value);
  //   } else if (name === 'password') {
  //     setAdminpassword(value);
  //   }
  // };
  // const [open1, setOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('NewAlert');
  // const [selectedOption1, setSelectedOption1] = useState('');
 //const navigate = useNavigate();

  const handleRadioChange1 = (NewAlert) => {
      setSelectedOption1(NewAlert);
    }
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [adminemail,setAdminemail] = useState('');
  const [adminpassword,setAdminpassword] = useState('');
   
  // const [pdata,setPdata] = useState('');
  // const [usedeta,setUsedeta] = useState({
  //   firstName : '',
  //   lastName : '',
  //   age : '',
  //   phoneNumber : '',
  //   address : '',
  //   year : ''
  // });





  // useEffect(()=>{
   
  // },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/")
//     if(selectedOption1 === 'NewAlert'){

//       if (email === "") {
//         toast.error(`Please Enter Email`);
//       } 
//       else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false){
//         toast.error(`Please Enter valid Email Address`);
//       }else if (!password.length) {
//         toast.error("Please Enter Password")
//       }else if(password.length <= 4){
//         toast.error("Password minimum 5 Characters and maximum 10 Characters")
//       }
//       else{ 
//         dispatch(setloading(true))
//         setTimeout(() => {
//           axios({
//             method: "post",
//             url: `http://localhost:3000/auth/login`,
//             data:{
//               'email':email,
//               'password':password
//             }
//           })
//           .then((response) => {
//              console.log("ss",response?.data?.id);
//              dispatch(setloading(false))
//             // setPdata(response?.data?.id)
//             dispatch(usertoken(response?.data?.token))
//             dispatch(setuserid(response?.data?.id))
//             console.log('sadsad',response?.data?.token)
//             toast.success('Login successful');
//             axios({
//               method: "get",
//               url: `http://localhost:3000/auth/AlluserDetails`
//             })
//               .then((response) => {
//                dispatch(setbranch(response?.data?.users[0]?.branch));
              
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//             // sessionStorage.setItem('token1',response?.data?.token)
//             // sessionStorage.setItem('token2',response?.data?.id)
//               navigate("/")
//               window.reload()
//           })
//           .catch((error) => {
//             dispatch(setloading(false))
//           toast.error(error?.response?.data?.message);
//           });
//         }, 1000);
        
//       }
//       //console.log('response',pdata);
//       // console.log('response1',pdata?.data?.token);
// setEmail('');
// setPassword('');  
// } else{

//       if (adminemail === "") {
//         toast.error(`Please Enter AdminEmail`);
//       } 
//       else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adminemail) === false){
//         toast.error(`Please Enter valid AdminEmail Address`);
//       }else if (!adminpassword.length) {
//         toast.error("Please Enter AdminPassword")
//       }else if(adminpassword.length <= 4){
//         toast.error("AdminPassword minimum 5 Characters and maximum 10 Characters")
//       }
//       else{ 
//         dispatch(setloading(true))
//   try {
//     const response = await axios.post('http://localhost:3000/user/adminLogin', {
//       'email': adminemail, 
//       'password':adminpassword });
//       if (response.status === 200) {
//         const data = response.data;
//         dispatch(setloading(false))
//         dispatch(setAdminToken(data?.token))
//         dispatch(setAdminName(data?.admin?.adminname))
//         dispatch(setAdminEmployeeId(data?.admin?.employeeId))
//         dispatch(setAdminPhoneNumber(data?.admin?.phonenumber))
//         dispatch(setAdminEmail(data?.admin?.email))
//         toast.success('Login successful');
        
//         navigate("/AdminDashBoard")
//         // console.log('JWT Token:', data.token);
//         // console.log("sivaa",data?.admin?.adminname);
//         // console.log("sivaa1111",data?.admin?.email);
//         // console.log("sivaa222",data?.admin?.employeeId);
//         // console.log("sivaa222",data?.admin?.phonenumber);
//       } 
//   } catch (error) {
//     dispatch(setloading(false))
//    toast.error(error?.response?.data?.message)
//   }
//   setAdminemail('');
//   setAdminpassword('')
// }
//  }
 };
 const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 
  
 
// const [verify,setVerify] = useState(true)
  return (
    <>
   
  <Box sx={{
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
   padding:'1rem',
  marginTop:"2rem"
  }}>
  <Paper elevation={3} sx={{border:"1px solid black"}}>
 
    
    <Box  pt={2} display={"flex"} alignItems={'center'} justifyContent={'space-around'} >

<LoginIcon sx={{
                fontSize: "3rem",
                color:'blue',
                borderRadius: "4%",
                fontSizeAdjust: 3,
              }} />
</Box>
<Box display={"flex"} alignItems={'center'} justifyContent={'space-around'} pt={1} >
<Typography variant='h6'><b>Login</b></Typography>
</Box>
<div>
  
<form >
            <Box p={2} justifyContent="center" alignItems={"center"} display={"flex"}>
            <TextField
            required
            size="small"
            placeholder={'Gmail'}
            label={'Gmail'}
            fullWidth
            // helperText="Ex:example1@cutmap.ac.in"
            // name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
          />
            </Box>
            <Box  p={2}>
            <FormControl size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            size="small"
            required
            sx={{ width:{xs:"20rem",lg: "30vw"} }}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='password'
          />
        </FormControl>
            {/* <TextField
            size="small"
            required
            placeholder={'Password'}
            label={'Password'}
            fullWidth
           name="password" value={password} onChange={handleChange}
          /> */}
            </Box>
            </form>
 
     
</div>
<Box   sx={{
     display:"flex",
      alignItems:"center",
      justifyContent:"center",
    padding:{
      xs:'1rem 1rem 0rem 1rem',
      lg:"1rem 1rem 0rem 1rem"
    }
 
  }}>
            <Button size='large'  variant="contained" sx={{backgroundColor:"black", padding:"5px"}}  autoFocus onClick={handleSubmit}>
     Login
    </Button>
            </Box>
            <Box  display={"flex"} alignItems={'center'} justifyContent={'space-around'} gap={2}  sx={{
    padding:{
      xs:'1rem 1rem 1rem 1rem',
      lg:"1rem 1rem 1rem 1rem"
    }
 
  }}>
              <Box>
              <Typography sx={{cursor:'pointer'}} 
              onClick={()=> navigate("/Forgot")}
              >Forgotten Account ?</Typography>
             
             </Box>
              <Box>
              <Typography sx={{cursor:'pointer'}} 
               onClick={()=> navigate("/Page1")}
              >Sign up for Registeration </Typography>
             
             </Box>
            </Box>



  </Paper>

  </Box>
  </>
 

  )
}

export default Page2