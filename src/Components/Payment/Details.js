import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import {Link} from "react-router-dom";

export default function PaymentDetails() {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ ml: "5%" }}>
            <Typography variant ="h6" sx={{ mt: "5%" }}>CHECKOUT</Typography>
            <Typography sx={{ mt: "2%" }}>Contact Information</Typography>
            <Typography
              sx={{ display: "flex", justifyContent: "space-between", mt: "2%" }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="FirstName"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="LastName"
                variant="outlined"
                sx={{ ml: "20px" }}
              />
            </Typography>
            <Typography sx={{ mt: "20px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
            </Typography>

            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Keep Me Updated on more Events and News"
                sx={{mt:'20px'}}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Keep Me Updated on more Events and News"
              />

              <FormControlLabel
                control={<Checkbox />}
                label="Accept Terms and Conditions"
                sx={{mt:'40px'}}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ minWidth: 300 , mb:2, ml:2, mt:'5%'}}>
          <CardMedia
            component="img"
            height="140"
            image="/images/bike.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Order Summary
            </Typography>
            <Typography variant="body2" color="text.secondary">
             1 x General Summary 1500
            </Typography>
            <Typography variant="body2" color="text.secondary">
             SubTotal 1500
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Fees 0
            </Typography>
          </CardContent>
          <CardActions>
            <Link to = '/eventsDetails/pay/tickets'>
          <Button  sx={{marginBottom:'0px', height:'80px',  backgroundColor:'black', width:'100%', color:'green'}} variant="contained" >  CHECKOUT </Button>
          </Link>
          </CardActions>
        </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
