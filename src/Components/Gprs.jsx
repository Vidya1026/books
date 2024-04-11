import React from 'react'
import { Box, Grid, Paper, Typography,Button } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import { OutlinedInput ,InputLabel,FormControl } from '@mui/material';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AdbIcon from '@mui/icons-material/Adb';









function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Gprs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <Box  p={{xs:2,lg:8}} >
    <Paper elevation={3} style={{ padding: 20 ,border:"1px solid black"}}>
    <Grid container   p={2}>
       
       <Grid  xs={12} lg={5} md={6} sm={12} style={{ borderRight: "1px solid black",marginRight:"5px" }}>
       
         <Box p={1} >
         <Typography sx={{fontSize:"1.5rem"}}><b>G.vidya</b></Typography>
         <Typography><>+916301072269</></Typography>
         <Typography><>yerrasiva1234@gmail.com</></Typography>
         </Box>
      <Box pt={2} display={'flex'} gap={3}>
      <Box >
        <Button variant='contained' sx={{backgroundColor:"black"}}>
         EDIT
        </Button>
    </Box>
    <Box>
    <Button  variant='contained' sx={{backgroundColor:"black",}}>
         LOGOUT
        </Button>
    </Box>
      </Box>
      </Grid>
      
      <Grid xs={12} lg={5} md={6} sm={12}>
      <Box p={1} sx={{pl:{lg:"10px",sx:"0px"}}}>
         <Typography sx={{fontSize:"1.5rem"}}><b>ADDRESS</b></Typography>
         <Typography><>R107,AJMERA INFINITY</></Typography>
         <Typography><>HYDERABAD</></Typography>
         <Typography><>INDIA</></Typography>
         <Typography><>500072</></Typography>
         </Box>
      </Grid>
      
      
      
      </Grid>
      </Paper>
    </Box> 



    <Box  p={{xs:2,lg:8}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#f0f0f0' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ORDERS" {...a11yProps(0)} />
          <Tab label="TESTS" {...a11yProps(1)} />
          <Tab label="Q/A" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Paper elevation={3} style={{ padding: 20 ,border:"1px solid black"}}>
    <Grid container   p={2}>
       
       <Grid  xs={12} lg={5} md={6} sm={12}>
       
         <Box p={1} >
         <Typography sx={{fontSize:"1.5rem"}}><b>ORDER #1293</b></Typography>
         <Typography><>PRODUCT : sample Book name</></Typography>
         <Typography><>DATE : 10/04/2024</></Typography>
         <Typography sx={{fontSize:"1.5rem"}}><b>ADDRESS</b></Typography>
         <Typography><>R107,AJMERA INFINITY</></Typography>
         <Typography><>HYDERABAD</></Typography>
         <Typography><>INDIA</></Typography>
         <Typography><>500072</></Typography>
         </Box>
     
      </Grid>
      
      <Grid xs={12} lg={6} md={6} sm={12}>
      <Box p={1} sx={{pl:{lg:"10rem",sx:"0px"}}}>
     <Box pt={2}>
     <Button   variant='contained' sx={{backgroundColor:"black",width:"50%"}}>
        <Typography variant='body1'> VIEW DETAILS</Typography>
        </Button>
     </Box>
     <Box pt={2}>
     <Button  variant='contained' sx={{backgroundColor:"black",width:"50%"}}>
     <Typography variant='body1'> TRACK ORDER</Typography>
        </Button>
     </Box>
     <Box pt={2}>
     <Button  variant='contained' sx={{backgroundColor:"black",width:"50%"}}>
       <Typography variant='body1'> DOWNLOAD INVOICE </Typography>
        </Button>
     </Box>
         </Box>
      </Grid>
      
      
      
      </Grid>
      </Paper>
      <Box pt={1}>
      <Paper elevation={3} style={{ padding: 20 ,border:"1px solid black"}}>
    <Grid container   p={2}>
       
       <Grid  xs={12} lg={5} md={6} sm={12}>
       
         <Box p={1} >
         <Typography sx={{fontSize:"1.5rem"}}><b>ORDER #1293</b></Typography>
         <Typography><>PRODUCT : sample Book name</></Typography>
         <Typography><>DATE : 10/04/2024</></Typography>
         <Typography sx={{fontSize:"1.5rem"}}><b>ADDRESS</b></Typography>
         <Typography><>R107,AJMERA INFINITY</></Typography>
         <Typography><>HYDERABAD</></Typography>
         <Typography><>INDIA</></Typography>
         <Typography><>500072</></Typography>
         </Box>
     
      </Grid>
      
      <Grid xs={12} lg={6} md={6} sm={12}>
      <Box p={1} sx={{pl:{lg:"10rem",sx:"0px"}}}>
     <Box pt={2}>
     <Button   variant='contained' sx={{backgroundColor:"black",width:"50%"}}>
        <Typography variant='body1'> VIEW DETAILS</Typography>
        </Button>
     </Box>
     <Box pt={2}>
     <Button  variant='contained' sx={{backgroundColor:"black",width:"50%"}}>
     <Typography variant='body1'> TRACK ORDER</Typography>
        </Button>
     </Box>
     <Box pt={2}>
     <Button  variant='contained' sx={{backgroundColor:"black",width:"50%"}}>
       <Typography variant='body1'> DOWNLOAD INVOICE </Typography>
        </Button>
     </Box>
         </Box>
      </Grid>
      
      
      
      </Grid>
      </Paper>
      </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Grid xs={12} lg={12} md={12} sm={12}>
      <Box p={1} >
      <FormControl size="small">
           <InputLabel >Search</InputLabel>
           <OutlinedInput
            //  id="outlined-adornment-password"
             size="small"
             required
             sx={{backgroundColor:'white'}}
             // style={{ width: "25vw" }}
             // type={showPassword ? 'text' : 'password'}
             // value={password}
             // onChange={(e) => setPassword(e.target.value)}
             endAdornment={
               <InputAdornment position="start">
                 <IconButton
                   aria-label="toggle password visibility"
                  
                   edge="start"
                 >
                 <SearchIcon />
                 </IconButton>
               </InputAdornment>
             }
             label="Search"
           />
         </FormControl>
         </Box>
      </Grid>
      <Box pt={1}>
      <Paper elevation={3} style={{ padding: 20 ,border:"1px solid black"}}>
    <Grid container   p={2}>
       
       <Grid  xs={12} lg={5} md={6} sm={12}>
       
         <Box p={1} >
         <Typography sx={{fontSize:"1.5rem"}}><b>TEST NAME</b></Typography>
         <Typography><>MODULE : NAME OF MODULE</></Typography>
         <Typography><>DATE : 10/04/2024</></Typography>
         <Typography><>MARKS :100</></Typography>
         <Typography><>DURATION :30 Mins</></Typography>
         
         </Box>
     
      </Grid>
      
      <Grid xs={12} lg={6} md={6} sm={12}>
      <Box p={1} sx={{pl:{lg:"10rem",sx:"0px"}}}>
       
    

    
     <Box pt={5}>
     <Button  variant='contained' sx={{backgroundColor:"black",width:"50%"}}>
     <Typography variant='body1'> TRACK ORDER</Typography>
        </Button>
     </Box>
    
         </Box>
      </Grid>
      
      
      
      </Grid>
      </Paper>
      </Box>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Grid xs={12} lg={12} md={12} sm={12}>
      <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:"10.8rem"}} >
     <Box>
     <FormControl size="small">
           <InputLabel >Search</InputLabel>
           <OutlinedInput
            //  id="outlined-adornment-password"
             size="small"
             required
             sx={{backgroundColor:'white'}}
             style={{ width: "37.5vw" }}
             // type={showPassword ? 'text' : 'password'}
             // value={password}
             // onChange={(e) => setPassword(e.target.value)}
             endAdornment={
               <InputAdornment position="start">
                 <IconButton
                   aria-label="toggle password visibility"
                  
                   edge="start"
                 >
                 <SearchIcon />
                 </IconButton>
               </InputAdornment>
             }
             label="Search"
           />
         </FormControl>
     </Box>
     <Box>
    <Typography>OR</Typography>
     </Box>
     <Box >
     <Button fullWidth variant='contained' sx={{backgroundColor:"black"}}>
     <Typography variant='body1'>ASK A NEW QUESTION</Typography>
        </Button>
     </Box>
         </Box>
      </Grid>
      <Box pt={1}>
      <Paper elevation={3} style={{ padding: 20 ,border:"1px solid black"}}>
    <Grid container   p={2}>
       
       <Grid  xs={12} lg={5} md={6} sm={12}>
       
         <Box p={1} >
         <Typography sx={{fontSize:"1.5rem"}}><b>Question Title</b></Typography>
         <Typography><>MODULE : NAME OF MODULE</></Typography>
         <Typography><>DATE : 10/04/2024</></Typography>
         
         
         </Box>
     
      </Grid>
      
      <Grid xs={12} lg={6} md={6} sm={12}>
      <Box p={1} sx={{pl:{lg:"10rem",sx:"0px"}}}>
       
    

    
     <Box pt={5}>
     <Button  variant='contained' sx={{backgroundColor:"black",width:"50%"}}>
     <Typography variant='body1'>VIEW REPLY</Typography>
        </Button>
     </Box>
    
         </Box>
      </Grid>
      
      
      
      </Grid>
      </Paper>
      </Box>

      </CustomTabPanel>
    </Box>
   </>
  )
}

export default Gprs