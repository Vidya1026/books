import React, { useState } from "react";
import { useCart } from "./context/CartContext";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const UserCart = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [itemToRemove, setItemToRemove] = React.useState(null); // State to hold the item to remove

  const handleClickOpen = (item) => {
    setItemToRemove(item); // Set the item to remove
    setOpen(true);
  };

  const handleClose = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove); // Remove the item from the cart
      setItemToRemove(null); // Reset itemToRemove state
    }
    setOpen(false);
  };
  const handleClose3 = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    // Set the item to remove
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
    navigate("/Gprs");
  };
  const handleClose4 = () => {
    setOpen1(false);
  };
  const { cartItems, removeFromCart,setCartItems} = useCart();

  //  console.log(cartItems);
   
  const totalAmountCalculationFunction = () => {
    return cartItems.reduce((total, item) => 
                       total + item.product.price * item.quantity, 0);
};
//   const calculateTotalPrice = () => {
//     let totalPrice = 0;
//     cartItems.forEach((item) => {
//         totalPrice += item.price 
//     });
//     return totalPrice;
// };
// const [totalPrice1, setTotalPrice1] = useState(calculateTotalPrice());
// // console.log(totalPrice1)
// const incrementCartItem = (id) => {
//   setTotalPrice1(totalPrice1+cartItems?.find((ele)=>ele.id===id)?.price);
// };
// const decrementCartItem = (id) => {
//   // Ensure cart items don't go below 0
//   if (cartItems > 0) {
//     setTotalPrice1(totalPrice1-cartItems?.find((ele)=>ele.id===id)?.price);
//   }
// };
  // console.log("asdf",calculateTotalPrice())
  // const incrementItemQuantity = (item) => {
  //   item.quantity += 1;
  //    setTotalPrice(calculateTotalPrice());
  // };

  // const decrementItemQuantity = (item) => {
  //   if (item.quantity > 1) {
  //     item.quantity -= 1;
  //     setTotalPrice(calculateTotalPrice());
  //   }
  // };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b style={{ color: "black" }}> DELECT BOOK FROM CART</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose3}
            sx={{ backgroundColor: "black", color: "white" }}
          >
            NO
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ backgroundColor: "black", color: "white" }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box p={3}>
          <center>
            {" "}
            <Typography sx={{ letterSpacing: "1px" }}>
              <b>PLEASE PROVIDE YOUR ADDRESS</b>
            </Typography>
          </center>
        </Box>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box>
              <div>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="35"
                ></textarea>
              </div>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose4}
            sx={{ backgroundColor: "black", color: "white" }}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleClose1}
            autoFocus
            sx={{ backgroundColor: "black", color: "white" }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <div>
        <Box
          p={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <h2 className="y-cart"> TOTAL:${totalAmountCalculationFunction()}</h2>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={handleClickOpen1}
              sx={{ backgroundColor: "black" }}
            >
              CheckOut
            </Button>
          </Box>
        </Box>
        {cartItems.length === 0 ? (
          <p style={{ paddingLeft: "50%" }}>Your Cart is Empty</p>
        ) : (
          <div>
            <Box p={5}>
              <Grid container spacing={2}>
                {cartItems?.map((item) => (
                  <Grid item xs={12} key={item.id}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Box pl={3}>
                            <img
                              src={item.product.image}
                              style={{ width: "60%", height: "auto" }}
                              alt="Product"
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="h5" sx={{ fontSize: "18px" }}>
                            <b>{item.product.title}</b>
                          </Typography>
                          <Typography mt={1} variant="body1">
                            {item.product.description}
                          </Typography>
                          <Typography mt={1} variant="body1">
                            <b> Price: ${item.product.price}</b>
                          </Typography>
                          <Box
                            pt={2}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "row",
                            }}
                          >
                            <Box pl={4}>
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                onClick={() => handleClickOpen(item)}
                              >
                                remove
                              </Button>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                onClick={(e) => {
                                  setCartItems((prevCartCourses) => {
                                      const updatedCart = prevCartCourses.map(
                                      (prevItem) =>
                                      prevItem.product.id === item.product.id
                                              ? { ...prevItem, quantity:
                                              Math.max(item.quantity - 1, 0) }
                                              : prevItem
                                      );
                                      return updatedCart;
                                  })
                              }}
                              >
                                -
                              </Button>
                              <Typography
                                variant="body1"
                                component="span"
                                sx={{ margin: "0 10px" }}
                              >
                                {item.quantity}
                              </Typography>
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                onClick={()=>{setCartItems((prev)=>{
                                  const updatedCart = prev.map((prevItem)=> prevItem.product.id === item.product.id
                                  ? { ...prevItem, quantity: 
                                  item.quantity + 1 }
                                  : prevItem
                                  )
                                  return updatedCart;
                                })}}
                              >
                                +
                              </Button>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
