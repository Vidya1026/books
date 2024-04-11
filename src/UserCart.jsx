import React from 'react'
import { useCart } from './context/CartContext';
import { Box, Grid, Paper, Typography,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
    const handleClickOpen1 = () => {
        // Set the item to remove
        setOpen1(true);
    };

    const handleClose1= () => {
        setOpen1(false);
        navigate('/Gprs')
    };
    const {cartItems, removeFromCart} = useCart()

    // console.log(cartItems);
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price;
        });
        return totalPrice;
    };
    // console.log("asdf",calculateTotalPrice())

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
              <b style={{color:"black"}}>  DELECT BOOK FROM CART</b>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button variant='contained' onClick={handleClose} sx={{ backgroundColor: "black", color: "white" }}>NO</Button>
            <Button   variant='contained'onClick={handleClose} sx={{ backgroundColor: "black", color: "white" }} autoFocus>
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
<Box pt={3}>
<center> <Typography sx={{letterSpacing:"1px"}}><b>PLEASE PROVIDE YOUR ADDRESS</b></Typography></center>
</Box>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
             <Box >
               <div >
                <input style={{width:"300px", height:"200px" ,border:"1px solid black"}} type='text' />
               </div>
             </Box>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button  variant='contained' onClick={handleClose1} sx={{ backgroundColor: "black", color: "white" }}>cancel</Button>
            <Button  variant='contained' onClick={handleClose1} autoFocus sx={{ backgroundColor: "black", color: "white" }}>
                Submit
            </Button>
        </DialogActions>
    </Dialog>
    <div>
        <Box p={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
            <Box  >

                <h2 className='y-cart'> TOTAL:${calculateTotalPrice()}</h2>

            </Box>
            <Box >

                <Button variant='contained' onClick={handleClickOpen1} sx={{ backgroundColor: "black" }}>CheckOut</Button>

            </Box>
        </Box>
        {cartItems.length === 0 ?
            (<p style={{paddingLeft:"50%"}} >Your Cart is Empty</p>) :
            <div>
                {cartItems.map((item) => {
                    return (
                        <Box p={3} height={'30%'} key={item.id}>

                            <Grid item xs={12} lg={12}>
                                <Paper elevation={3} sx={{ p: 1 }}>
                                    <Box p={4} display="flex" >
                                        <Grid item xs={12} lg={4}>
                                            <Box p={4}>
                                                <img src={item.image} style={{ width: '100%', height: "50vh", objectFit: 'cover' }} alt="Image" />
                                            </Box>
                                        </Grid>
                                        <Box flex="1">
                                            <Typography pl={4} variant="h5" sx={{ fontSize: "18px" }}>
                                                <b>{item.title}</b>
                                            </Typography>
                                            <Typography pl={4} pt={1}>
                                                {item.description}
                                            </Typography>
                                            <Typography sx={{ fontSize: "1.5rem" }} pl={4} pt={2}>
                                                <b>{item.price}</b>
                                            </Typography>
                                           <Box sx={{display:"flex" ,alignItems:"center" ,justifyContent:'center', flexDirection:'row' }}>
                                           <Box pl={4}>
                                                <Button variant='contained' sx={{ backgroundColor: "black", color: "white" }} onClick={() => handleClickOpen(item)}>remove</Button>
                                            </Box>
                                            <Box pl={4}>
                                                <Button variant='contained' sx={{ backgroundColor: "black", color: "white" }}>1+</Button>
                                            </Box>
                                           </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>

                        </Box>
                    )
                })}
            </div>
        }

    </div>
</>
  )
}

export default UserCart