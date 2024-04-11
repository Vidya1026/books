import React from 'react'
import banner from "../Assets/bus2.jpeg";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Icon, Paper, Typography, useTheme } from '@mui/material';
import driver1 from "../Assets/1612639204-image3.jpg";
import driver2 from "../Assets/download (1).jpeg";
import driver3 from "../Assets/woman-reading-books-background-8.jpg";

import Grid from '@mui/material/Unstable_Grid2';









const About = () => {


  return (
   <>
    <Box  p={{xs:2,lg:8}} >
      <Grid container  p={2}>
       
        <Grid  p={4} xs={12} lg={6} md={6} sm={12}>
        
          <Box>
          <img
            style={{ width: '90%', height:"300px", objectFit: 'cover' }}
            alt="green iguana"
            src={driver1}
          />
          </Box>
        
       </Grid>
       
       <Grid xs={12} lg={6} md={6} sm={12}>
          <Box p={3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Box>
       </Grid>
       
       
       
       </Grid></Box> 






    <Box  p={{xs:2,lg:8}} >
      <Grid container   p={2}>
       


      <Grid xs={12} lg={6} md={6} sm={12}>
          <Box p={3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Box>
       </Grid>
        <Grid  p={4} xs={12} lg={6} md={6} sm={12}>
        
          <Box>
          <img
            style={{ width: '90%', height:"300px", objectFit: 'cover' }}
            alt="green iguana"
            src={driver2}
          />
          </Box>
        
       </Grid>
       
      
       
       
       
       </Grid></Box> 


    <Box  p={{xs:2,lg:1}} >
      <Grid container   p={2}>
       
        <Grid  p={4} xs={12} lg={6} md={6} sm={12}>
        
          <Box>
          <img
            style={{ width: '90%', height:"300px", objectFit: 'cover' }}
            alt="green iguana"
            src={driver3}
          />
          </Box>
        
       </Grid>
       
       <Grid xs={12} lg={6} md={6} sm={12}>
          <Box p={3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Box>
       </Grid>
       
       
       
       </Grid></Box> 
   </>
  )
}
    
export default About