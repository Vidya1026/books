import React, { useState } from 'react'

import youtube from "../Assets/Youtube-HD-Wallpapers-Free-Download.png";
import { styled } from '@mui/system';

import { Box, Button, Grid, Paper, Typography } from '@mui/material';





const Classes = () => {



  const gridData = [
    { id: 1, title: 'Sample Video Title 1', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 2, title: 'Sample Video Title 2', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 3, title: 'Sample Video Title 3', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 4, title: 'Sample Video Title 4', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 5, title: 'Sample Video Title 5', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 6, title: 'Sample Video Title 6', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 7, title: 'Sample Video Title 7', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 8, title: 'Sample Video Title 8', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 9, title: 'Sample Video Title 9', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 10, title: 'Sample Video Title 10', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 11, title: 'Sample Video Title 11', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 12, title: 'Sample Video Title 12', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 13, title: 'Sample Video Title 13', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 14, title: 'Sample Video Title 14', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    { id: 15, title: 'Sample Video Title 15', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}` },
    // Add more data as needed
  ];
  const StyledButton = styled(Button)({
    borderRadius: '50%',
    minWidth: '40px',
    padding: '8px',
    margin: '0 5px',
    backgroundColor: 'transparent',
    border: '1px solid #aaa',
    color: '#333',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  });
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Ensure page number doesn't go below 1
  };

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, gridData.length);

  const totalPages = Math.ceil(gridData.length / itemsPerPage);
  return (
   <>
  <Box  p={{xs:1,lg:3}} >
      <Grid container  component={Paper} p={2}>
       {gridData.slice(startIndex, endIndex).map(item => ( 
       <>
        <Grid key={item.index} xs={12} lg={6} md={6} sm={12}>
      <Box p={{xs:1,lg:6}}  pt={1}>
      <img src={item.image} style={{ width: '90%', objectFit: 'cover' }} alt="Image" />
      </Box>
                   
       </Grid>

        <Grid  xs={12} lg={6} md={6} sm={12}>
        <Box p={4}>
        <Typography variant="h5" sx={{ fontSize: "18px" }}>
                    <b>{item.title}</b>
                  </Typography>
                  <Typography pt={1}>
                    {item.description}
                  </Typography>
                  <Box >
                    <Button variant='contained' sx={{ backgroundColor: "black", color: "white" }}>PRACTICE</Button>
                  </Box>
                  </Box>
       </Grid>
       
    </>

       ))} 
        
       
       
       
       
       </Grid>
       <hr/>
       </Box>
       <Box mt={2} textAlign="center">
        <Button disabled={currentPage === 1} onClick={prevPage}>Previous</Button>
        {[...Array(totalPages)].map((_, index) => (
          <StyledButton key={index + 1} onClick={() => setCurrentPage(index + 1)} variant={currentPage === index + 1 ? 'contained' : 'outlined'}>
            {index + 1}
          </StyledButton>
        ))}
        <Button disabled={currentPage === totalPages} onClick={nextPage}>Next</Button>
      </Box>
    
   </>
  )
}

export default Classes