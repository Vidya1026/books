import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
// import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from "@mui/styles";
import moment from "moment";
import axios from 'axios';
import LoginIcon from '@mui/icons-material/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';


const Page1 = () => {
  const [verf,setVerf] = useState('')
  const navigate = useNavigate();
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     UserName: "",
  //     registrationNumber: "",
  //     branch: "",
  //     phoneNumber: "",
  //     BoadingPoint: "",
  //     ParentPhoneNumber:"",
  //     address: "",
  //     year: "",
  //     gender:'',
  //     chosse:'',
  //   },
  //   validationSchema: Yup.object({
  //     // email: Yup.string().email("Invalid email address").required("Required"),
  //     email: Yup.string()
  //     .email("Invalid email address")
  //     .matches(/^[a-zA-Z0-9._-]+@cutmap\.ac\.in$/, "Email must be from cutmap.ac.in domain")
  //     .required("Required"),
  //     password: Yup.string()
  //       .min(6, "Password must be at least 6 characters")
  //       .required("Required"),
  //       UserName: Yup.string().required("Required"),

  //       registrationNumber: Yup.string().required("Required"),

  //     branch: Yup.string().required("Required"),
  //     phoneNumber: Yup.string().required("Required"),
  //     ParentPhoneNumber: Yup.string().required("Required"),
  //     chosse: Yup.string().required("Required"),

  //     BoadingPoint: Yup.string().required("Required"),
  //     address: Yup.string().required("Required"),
  //     year: Yup.string().required("Required"),
  //     gender: Yup.string().required('Required'),
  //   }),
  //   onSubmit: async(values,{resetForm}) => {
  //     // values.dateOfBirth = moment(values.dateOfBirth['$d']).format('DD/MM/YYYY')
  //     try {
  //       await axios.post('http://localhost:3000/auth/register', values);
  //       toast.success('User registered successfully');
  //       axios({
  //         method: "get",
  //         url: `http://localhost:3000/auth/AlluserDetails`
  //       })
  //         .then((response) => {
  //           console.log("ver",response?.data?.users[0]?.verify?.[0]?.Accept1)
  //           console.log("ver1",verf)
  //         //  dispatch(setbranch(response?.data?.users[0]?.branch));
  //         setVerf(response?.data?.users[0]?.verify?.[0]?.Accept1)
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //       navigate("/Page2")
  //       resetForm();
  //       // setOpen(false);
  //       // navigate('/')
  //     } catch (error) {
  //       toast.error(error?.response?.data?.message)
  //       //console.log('siva222',error?.response?.data?.message);
  //     }// Handle registration logic here
  //     //console.log("siva",values)
  //   },
  // });
  return (
    <>
    <Box pt={3} >
                <Box
                  justifyContent="center"
                  alignItems={"center"}
                  display={"flex"}
                  
                >
                  <PersonAddAltOutlinedIcon
                    sx={{
                      fontSize: "3rem",
                      color:`grey`,
                      borderRadius: "3%",
                      fontSizeAdjust: 4,
                    }}
                  />
                </Box>
                <Box
                  justifyContent="center"
                  alignItems={"center"}
                  display={"flex"}
                >
                  <Typography
                    variant="h6"
                    color={(theme) => theme.palette.grey[500]}
                    component="h2"
                    guttertop={"true"}
                    textTransform={"uppercase"}
                    fontWeight={300}
                    letterSpacing={1}
                  >
                    User Registeration
                  </Typography>
                </Box>
              </Box>
              <Stack sx={{
                padding:"0rem 3rem 0rem 3rem"
              }}
                  flexDirection={{
                    xs: "column",
                    md: "column",
                    sm: "row",
                    lg: "column",
                  }}
                  justifyContent={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  pb={1}
                >
                  <form >
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          <TextField
                            size="small"
                            placeholder="Email"
                            
                            style={{ width: "100%" }}
                            id="email"
                            label="Email"
                           
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          <TextField
                            id="password"
                            label="Password"
                            type="password"
                            size="small"
                            placeholder="Password"
                            // style={{ width: "18vw" }}
                            style={{ width: "100%" }}
                           

                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="UserName"
                            id="UserName"
                            label="First Name"
                           
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                     
                      
         
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Region"
                            id="Region"
                            label="Region"
                          
                           
                          />
                         
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                         
                          <FormControl  size="small" style={{ width: "100%" }}>
      <InputLabel id="yearx">Gender</InputLabel>
      <Select
        labelId="gender"
        id="gender"
        // value={age}
        // style={{width:'18vw'}}
        style={{ width: "100%" }}
        label="gender"
        placeholder="gender"
       
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'M'}>Male</MenuItem>
        <MenuItem value={'F'}>Female</MenuItem>
        <MenuItem value={'o'}>Others</MenuItem>
        
      </Select>
      
    </FormControl>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                        
                          <FormControl  size="small" style={{ width: "100%" }}>
      <InputLabel id="yearx">year</InputLabel>
      <Select
        labelId="year"
        id="year"
        // value={age}
        // style={{width:'18vw'}}
        style={{ width: "100%" }}
        label="year"
        placeholder="year"
       
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'1year'}>1'st year</MenuItem>
        <MenuItem value={'2year'}>2'nd year</MenuItem>
        <MenuItem value={'3year'}>3'rd year</MenuItem>
        <MenuItem value={'4year'}>4'th year</MenuItem>
      </Select>
     
    </FormControl>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={4}>
                        <Box pt={1}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Parent MobileNumber"
                            id="ParentPhoneNumber"
                            label="Parent MobileNumber"
                            
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={4}>
                        <Box pt={1}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Address"
                            id="address"
                            label="Address"
                           
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={4}>
                        <Box pt={1}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Your Favorite Friend name"
                            id="chosse"
                            label="Your Favorite Friend name"
                           
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                          
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={4}>
                        <Box pt={1}>
                          {" "}
                          <TextField
                            size="small"
                          
                            placeholder="MobileNumber"
                            id="MobileNumber"
                            label="MobileNumber"
                            style={{ width: "100%" }}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={2} xs={12} md={4}>
                        <Box pt={1}>
                         <Button  variant='contained' sx={{backgroundColor:"black"}}>SENT OTP</Button>
                        </Box>
                      </Grid>
                      
                      <Grid item sm={12} lg={6} xs={12} md={12}>
                        <Box pt={1}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="OTP"
                            id="chosse"
                            label="OTP"
                           
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                          <Box  p={1} sx={{display:'flex', }}><Typography>Did'nt Receive It?</Typography><button >Resend</button></Box>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box pt={2} display={'flex'} alignContent={'center'} justifyContent={'center'}>
                    <Button fullWidth type="submit" variant="contained" sx={{backgroundColor:"black"}}>
                     submit
                    </Button>
                    </Box>
                    <Box pt={2} display={'flex'} alignContent={'center'} justifyContent={'center'} >
                      <Typography sx={{cursor:'pointer'}} 
                       onClick={()=> navigate("/Page2")}
                      >Already have an account?</Typography>
                    </Box>
                  </form>
                </Stack>
            
    
    </>
  )
}

export default Page1