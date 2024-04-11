import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import  map from "./Assets/map.png"
import { Box, Grid,  IconButton,  Paper, Typography, } from '@mui/material';
import { Link } from 'react-router-dom';
const Footer = () => {
  const boxStyle = {
    backgroundImage: `url(${map})`,
    backgroundColor:'#060214',
    backgroundSize: 'cover', // Optional: adjust the background size
    backgroundPosition: 'center', // Optional: adjust the background position
    width: '100%', // Optional: set the width of the Box
     // Optional: set the height of the Box
  };
  return (
    <>
    <Box  p={{xs:2,lg:5}} >
       
    <Grid container style={boxStyle} className='bg' component={Paper} p={3}>
      <Grid  xs={12} lg={6} md={3} sm={12}>
      <Typography variant='h5' color="white"><b>Address</b></Typography>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={3}>
          <Box><Typography>
           
              <PlaceIcon  sx={{
                    fontSize: "1.5rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Tekkali Village,Nilimarla Mandal,Hyderabad</b></Typography>
          
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={3}>
          <Box><Typography>
           
              <PhoneIcon  sx={{
                    fontSize: "1.5rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>6301072269</b></Typography>
          
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={3}>
          <Box><Typography>
           
              <MailIcon  sx={{
                    fontSize: "1.5rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Vidya123@gmail.com</b></Typography>
      </Box>  </Box>
       
     
     </Grid>
      <Grid  xs={12} lg={6} md={3} sm={12}>
      
      <Typography variant='h5' sx={{color:'white'}}><b>Contact Us </b></Typography>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={2}>
      <Box >
         <IconButton size='small'   sx={{
          color: 'white',
          borderRadius: '50%',
        
          border: '2px solid white', 
          '&:hover': {
            color: 'red',
          },
        }}>
        <Link to={"https://twitter.com/"}><TwitterIcon/></Link> 
         </IconButton>
           
            
            </Box>
      <Box >
         <IconButton size='small' sx={{
          color: 'white',
          borderRadius: '50%',
        
          border: '2px solid white', 
          '&:hover': {
            color: 'red',
          },
        }}>
          <Link to={"https://www.facebook.com/"}><FacebookIcon/></Link>
         
         </IconButton>
           
            
            </Box>
      <Box >
         <IconButton size='small' sx={{
          color: 'white',
          borderRadius: '50%',
           
          border: '2px solid white', 
          '&:hover': {
            color: 'red',
          },
        }}>
          <Link  to={'https://www.youtube.com/'}>

         <YouTubeIcon/>
          </Link>
         </IconButton>
           
            
            </Box>
      </Box>
     </Grid>
      
     
     
     
     
     
     </Grid></Box>
     <Box p={2}>
     <Grid  xs={12} lg={12} md={12} sm={12}>
     <Box  component="paper" display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} >
      <Typography variant='body2' >
      © 2022 All Copy Rights are Reserved | Disclaimer | Privacy Policy | Terms of Use | Blog
      </Typography>
        </Box>
     </Grid>
     </Box>
     </>
  )
}

export default Footer