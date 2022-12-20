import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";


export default function Ticket() {
  return (
    <>
      <Box sx={{ml:'20%'}}>
        <Card sx={{ maxWidth: 850, mb: 2, ml: 2 , mt: 2}}>
            <Grid container>
          <Grid item xs={6} md={4} sx={{padding:'2%'}}>
            <Typography sx={{marginTop:'5%'}}>You will be going to: Karura Forest</Typography>
            <Typography sx={{marginTop:'5%'}}>On: 16/12/2020</Typography>
            <Typography sx={{marginTop:'5%'}}>For: Bike Rididng</Typography>
            <Typography sx={{marginTop:'5%'}}>Which Starts at 10:00AM</Typography>
            <Typography sx={{marginTop:'5%'}}>Welcome All</Typography>
          </Grid>
          <Grid item xs={6} md={6} sx={{padding:'2%'}}>
            <CardMedia
              component="img"
              height="100%"
              image="/images/bike.jpeg"
              alt="green iguana"
            />
            
          </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
