import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import youtube from "../Assets/book1.jpeg";
import youtube1 from "../Assets/th (1).jpeg";
import youtube2 from "../Assets/book1.jpeg";
import { Button,} from '@mui/material';

import { useCart } from '../context/CartContext';
const Product = () => {
  const [showAlert, setShowAlert] = useState(false);
const { addToCart,} = useCart()
const handleAddToCart = (item) => {
  addToCart(item);
  setShowAlert(true);
  setTimeout(() => {
    setShowAlert(false);
  }, 2000); // Hide the alert after 2 seconds
};
  const gridData = [
    { id: 1, title: 'Sample Video Title 1', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}`,price:"200$" },
    { id: 2, title: 'Sample Video Title 2', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube1}`,price:"2300$" },
    { id: 3, title: 'Sample Video Title 3', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube2}`,price:"1200$" },
    { id: 4, title: 'Sample Video Title 4', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: `${youtube}`,price:"3200$" },
   
  ];
  return (
  <>
  <Box p={5}>

  <Grid container spacing={2}>
        {gridData.map(item => (
          <Grid key={item.id} item xs={12} lg={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box p={1} display="flex" >
                <Grid  item xs={12} lg={4}>
                 <Box p={4}>
                 <img src={item.image} style={{ width: '80%',height:"50vh", objectFit: 'cover' }} alt="Image" />
                 </Box>
                </Grid>
                <Box flex="1">
                  <Typography pl={4} variant="h5" sx={{ fontSize: "18px" }}>
                    <b>{item.title}</b>
                  </Typography>
                  <Typography pl={4} pt={1}>
                    {item.description}
                  </Typography>
                  <Typography  sx={{fontSize:"1.5rem"}} pl={4} pt={2}>

                    <b>{item.price}</b>
                  </Typography>
                  <Box pl={4}>
                    <Button variant='contained' sx={{ backgroundColor: "black", color: "white" }}onClick={() => handleAddToCart(item)} >ADD CART</Button>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {showAlert && (
        <Box mt={2}>
          
          <Typography variant="body1" align="center" color="success">Item added to cart!</Typography>
        </Box>
      )}
  </Box>
  
  </>
  )
}

export default Product