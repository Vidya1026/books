import React, {  useState } from 'react'

import slider1 from "../Assets/bg1.png";
import slider2 from "../Assets/wallpaperflare.com_wallpaper (10).jpg";
import slider3 from "../Assets/bg1.png";
import cctv from "../Assets/CCTV.jpeg";
import gps from "../Assets/gp.jpg";
import  whatsapp from "../Assets/Whatsapp.png"
import  Timetable from "../Assets/bt.jpg"
import  rules from "../Assets/rr.jpg"
import  emergency from "../Assets/erg.jpg"


import { Box,  Card, CardActions, CardContent, CardMedia, Icon, Paper, Typography, useTheme } from '@mui/material';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from '@mui/material/Unstable_Grid2';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: `${slider2}` ,
  },
  {
    imgPath: `${slider1}`,label: "",
  },
  {
    imgPath: `${slider3}`,label: "",
  },
];


const Home = () => {
 

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [userfeedback ,setUserfeedback] = useState([])
  // useEffect(()=>{
  //   axios.get('http://localhost:3000/user/AllFeedback').then((response)=>{
  //    console.log('ss',response?.data?.feedbacks
  //    );
  //    setUserfeedback(response?.data?.feedbacks)
  //   }).catch((error)=>{
  //    console.log(error);
  //   })
  //  },[])
  return (
   <>
   
   <Box>
   <Box>
        <Box >
          <Paper
            square
            elevation={1}
            sx={{
              display: "flex",
            }}
          >
            <Typography>{images[activeStep]?.label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
  axis={useTheme.direction === "rtl" ? "x-reverse" : "x"}
  index={activeStep}
  onChangeIndex={handleStepChange}
  enableMouseEvents
>
  {images?.map((step, index) => (
    <div key={step.label}>
      {Math.abs(activeStep - index) <= 2 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            padding:{
              lg:"0rem",
              xs:"1rem",
              md:"0rem",
              sm:"1rem"
            }
          }}
        >
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "80vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
            zIndex:2,
            position:"relative"

            }}
            src={step.imgPath}
            alt={step.label}
          />
          {/* <Typography className='small' variant="h5"
            sx={{
              
              position: "absolute",
               fontSize:"3rem", 
              paddingLeft:"20%",
              transform: "translateX(-50%)",
              color: "white", // Customize text color
            }}>
           {step.label}
          
          </Typography> */}
         
        </Box>
      ) : null}
    </div>
  ))}
</AutoPlaySwipeableViews>

        </Box>
      </Box>
  

      <Box
       sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:'2rem'}}>
        <Typography sx={{color:'black', fontFamily:"cursive",fontSize:'1.4rem'}}>Top Students</Typography>
      
      </Box>
      


      <Box pt={2}>
      <Box>
      <Grid container rowSpacing={4} >
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}  xs={12} lg={4} md={4} sm={12}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '150%', objectFit: 'cover' }}
            src={cctv}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent sx={{
        backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
        
        
      }}>
        <Typography variant="h5" sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}
          >
        <b>CCTV</b>
        </Typography>
        <Typography color="text.secondary" width={'30rem'} sx={{
          color:"black",
         fontFamily:'inherit',
         fontSize:"13px"
        }}>
        Centurion CCTV survilance.
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '45px 17px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '90%', height: '130%', objectFit: 'cover' }}
            src={gps}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent sx={{
        backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
        
        
      }}>
        <Typography gutterBottom variant="h5" component="div"  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
          <b>

          GPRS
          </b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
   GPRS Tracking System.
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '60%', height: '160%', objectFit: 'cover' }}
            src={whatsapp}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent sx={{
        backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
        
        
      }}>
        <Typography gutterBottom variant="h5" component="div"  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
        <b>What's App</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
       Transport what'sapp community.
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
        
      </Grid>
      <Grid container rowSpacing={4}  >
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}  xs={12} lg={4} md={4} sm={12}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '150%', objectFit: 'cover' }}
            src={Timetable}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent sx={{
        backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
        
        
      }}>
        <Typography gutterBottom variant="h5" component="div"  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
          <b>Time-Table</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
      Find out bus timings.
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '150%', objectFit: 'cover' }}
            src={rules}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent sx={{
        backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
        
        
      }}>
        <Typography gutterBottom variant="h5" component="div"  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
        <b>Rules&Regulations</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
        Follow our rules and Regulations.
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Card sx={{ maxWidth: 340 }} >
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '150%', objectFit: 'cover' }}
            src={emergency}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent sx={{
        backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
        
        
      }}>
        <Typography gutterBottom variant="h5" component="div"  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
          <b>Emergency Services</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}  sx={{
          color:"black",
         fontFamily:'sans-serif',
         fontSize:"13px"
        }}>
    CUTM provides Emergency Services
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
        
      </Grid>
    </Box>
      </Box>
{/* 
      <Box  p={{xs:2,lg:5}} >
      <Grid container  component={Paper} p={2}>
        <Grid  xs={12} lg={6} md={6} sm={12}>
          <Typography variant='h5'><b>OUR FEATURES</b></Typography>
          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={6}>
            <Box><Typography>
             
                <LanguageIcon  sx={{
                      fontSize: "3rem",
                      color: `red`,
                      borderRadius: "5%",
                      fontSizeAdjust: 4,
                    }}/>
             
              </Typography></Box>
            <Box >
              <Typography variant='body2'  sx={{color:'black',fontSize:'1.2rem', fontWeight:'bold'}}><b>We Are providing Maximum Traceability</b></Typography>
              <Typography variant='body2'  >With the help of GPRS and CCTV survilance</Typography>
             
              
              </Box>
          </Box>
          
          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={6}>
            <Box><Typography>  <LocalShippingIcon sx={{
                      fontSize: "3rem",
                      color: `red`,
                      borderRadius: "5%",
                      fontSizeAdjust: 4,
                    }}/></Typography></Box>
             <Box >
              <Typography variant='body2'  sx={{color:'black',fontSize:'1.2rem', fontWeight:'bold'}}><b>Fastest Mode of Transport</b></Typography>
              <Typography variant='body2'  >Although other means are faster, college transport is much more agile and safe.</Typography>
             
              
              </Box>
          </Box>
          
          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={6}>
          <Box><Typography>  <HeadsetMicOutlinedIcon sx={{
                      fontSize: "3rem",
                      color: `red`,
                      borderRadius: "5%",
                      fontSizeAdjust: 4,
                    }}/></Typography></Box>
             <Box >
              <Typography variant='body2'  sx={{color:'black',fontSize:'1.2rem', fontWeight:'bold'}}><b>24/7 Telephone Support</b></Typography>
              <Typography variant='body2'  >24/7 Telephone Support Available, college transport and safe.</Typography>
             
              
              </Box>
          </Box>
          
       </Grid>
        <Grid  xs={12} lg={6} md={6} sm={12}>
        
          <Box>
          <img
            style={{ width: '100%', objectFit: 'cover' }}
            alt="green iguana"
            src={bus}
          />
          </Box>
        
       </Grid>
       
       
       
       
       </Grid></Box> */}

       <Box
       sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:'2rem'}}>
        <Typography sx={{color:'black', fontFamily:"cursive", fontSize:{
        xs:"1rem",
        lg:'1.3rem'
      }}}>Reviews</Typography>
      
      </Box>
     


      <Box pt={2}>
      <Box>
      <Grid container rowSpacing={4} >
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}  xs={12} lg={4} md={4} sm={12}>
        <Card sx={{ maxWidth: 340 , backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
         }} >
        <p style={{
          padding:"4px 0px 0px 15px",
          border: '1px 0px 0px 0px solid red',

          marginBottom:"1px solid red"
         }}><b>siva</b></p>

<hr />
        
      
<CardContent>
        <Box   gutterBottom variant="h5" component="div"  >
        <p style={{fontFamily:'cursive'}}>some reviews submitted by the user about the company</p>
        </Box>
        
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Card sx={{ maxWidth: 340 , backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
         }} >
        <p style={{
          padding:"4px 0px 0px 15px",
          border: '1px 0px 0px 0px solid red',

          marginBottom:"1px solid red"
         }}><b>siva</b></p>

<hr />
        
      
<CardContent>
        <Box   gutterBottom variant="h5" component="div"  >
        <p style={{fontFamily:'cursive'}}>some reviews submitted by the user about the company</p>
        </Box>
        
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'} >
        <Card sx={{ maxWidth: 340 , backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
         }} >
        <p style={{
          padding:"4px 0px 0px 15px",
          border: '1px 0px 0px 0px solid red',

          marginBottom:"1px solid red"
         }}><b>siva</b></p>

<hr />
        
      
<CardContent>
        <Box   gutterBottom variant="h5" component="div"  >
        <p style={{fontFamily:'cursive'}}>some reviews submitted by the user about the company</p>
        </Box>
        
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'} >
        <Card sx={{ maxWidth: 340 , backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
         }} >
        <p style={{
          padding:"4px 0px 0px 15px",
          border: '1px 0px 0px 0px solid red',

          marginBottom:"1px solid red"
         }}><b>siva</b></p>

<hr />
        
      
<CardContent>
        <Box   gutterBottom variant="h5" component="div"  >
        <p style={{fontFamily:'cursive'}}>some reviews submitted by the user about the company</p>
        </Box>
        
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'} >
        <Card sx={{ maxWidth: 340 , backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
         }} >
        <p style={{
          padding:"4px 0px 0px 15px",
          border: '1px 0px 0px 0px solid red',

          marginBottom:"1px solid red"
         }}><b>siva</b></p>

<hr />
        
      
<CardContent>
        <Box   gutterBottom variant="h5" component="div"  >
        <p style={{fontFamily:'cursive'}}>some reviews submitted by the user about the company</p>
        </Box>
        
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'} >
        <Card sx={{ maxWidth: 340 , backgroundColor:'hwb(0 93% 7% / 0.858)',
        color: 'black' 
         }} >
        <p style={{
          padding:"4px 0px 0px 15px",
          border: '1px 0px 0px 0px solid red',

          marginBottom:"1px solid red"
         }}><b>siva</b></p>

<hr />
        
      
<CardContent>
        <Box   gutterBottom variant="h5" component="div"  >
        <p style={{fontFamily:'cursive'}}>some reviews submitted by the user about the company</p>
        </Box>
        
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
     
    </Box>
      </Box>
      <Box>
      </Box>
   </Box>
   <Box>
   
   </Box>
   </>
  )
}

export default Home
