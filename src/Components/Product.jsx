import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import youtube from "../Assets/book1.jpeg";
import youtube1 from "../Assets/th (1).jpeg";
import youtube2 from "../Assets/book1.jpeg";
import { Button } from '@mui/material';

import { useCart } from '../context/CartContext';

const Product = () => {
  // const [showAlert, setShowAlert] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    window.alert('Item add Successfully')
    // setShowAlert(true);
    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 1000); // Hide the alert after 2 seconds
  };

  const gridData = [
    { id: 1, title: 'Sample Video Title 1', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: youtube, price: 200 },
    { id: 2, title: 'Sample Video Title 2', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: youtube1, price: 2300 },
    { id: 3, title: 'Sample Video Title 3', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: youtube2, price: 1200 },
    { id: 4, title: 'Sample Video Title 4', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", image: youtube, price: 3200 },
  ];

  return (
    <>
      <Box p={5}>
        <Grid container spacing={2}>
          {gridData.map(item => (
            <Grid item xs={12} key={item.id}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}  sm={6}>
                    <Box pl={3}>
                    <img src={item.image} style={{ width: '60%', height: 'auto' }} alt="Product" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h5" sx={{ fontSize: "18px" }}>
                      <b>{item.title}</b>
                    </Typography>
                    <Typography mt={1} variant="body1">
                      {item.description}
                    </Typography>
                    <Typography mt={1} variant="body1">
                      Price: ${item.price}
                    </Typography>
                    <Button variant='contained' sx={{ mt: 2, backgroundColor: "black", color: "white" }} onClick={() => handleAddToCart(item)}>ADD TO CART</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
        

      </Box>
    </>
  )
}

export default Product;
