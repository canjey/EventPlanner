import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import {Link} from "react-router-dom";
import Person2Icon from '@mui/icons-material/Person2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoIcon from '@mui/icons-material/Info';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const pages = ["All ", "For you", "Online", "Today", "This Weekend", "Free", "Music", "Location"];
const events = []

export default function Events() {
  return (
     <>
    
        <Typography variant="h5" component="div" />
        <Box sx={{ display: {md: 'flex'}, flexWrap:{md:'wrap'}, ml:{md:'20%', xs:'10%'}, mt:'2%'}}>
        <Link to = "./eventsDetails" style={{textDecoration:'none'}}>
        <Card sx={{ width: {md: 800, xs: 600} , mb:2, ml:1}}>
          <CardMedia
            component="img"
            height="200"
            image="/images/bike.jpeg"
            alt="green iguana"
          />
          <CardContent sx={{ml:'10%'}}>
            <Typography variant ="h6"  sx ={{ml:'20%', mb:'2%'}}>
                Bike Riding
            </Typography>
            <Typography gutterBottom component="div" sx={{display:'flex'}}>
            <Typography>
              <Person2Icon sx={{color:'gray', mr:'10px'}}/> 
              </Typography>
              <Typography>Carol Waithaka
              </Typography>
              <LocationOnIcon  sx={{color:'gray', mr:'5px', marginLeft:'20%'}}/> Karura
            </Typography>
            <Typography gutterBottom component="div" sx={{display:'flex'}}>
            <Typography>
              <CalendarMonthIcon sx={{color:'gray', mr:'10px'}}/>
              </Typography>
              <Typography>
                16/12/2022
            </Typography>
            
              <AccountBalanceWalletIcon sx={{marginLeft:'24%', color:'gray', mr:'5px'}} />1200/=
            
            </Typography>
            <Typography gutterBottom component="div" sx={{display:'flex'}}>
              <LocalPhoneIcon sx={{color:'gray',  mr:'10px'}}/> 
              <Typography>
              0700152742
              </Typography>
            </Typography>
            <Typography gutterBottom  component="div"  sx={{display:'flex'}}>
              <InfoIcon sx={{color:'gray', mt:'15x', mr:'10px'}}/> 
              <Typography>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica. There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
            </Typography>
            </Typography>
            <Typography gutterBottom component="div"  sx={{display:'flex'}}>
              <AccountBalanceWalletIcon sx={{color:'gray', mt:'15x', mr:'10px'}}/> 
              <Typography>
              Mode of Payment: Mpesa
            </Typography>
            </Typography>
          </CardContent>
          <CardActions>
          <Box sx={{marginLeft:'45%'}}>
        <Link to = "./pay">
            <Button variant="contained"  sx={{backgroundColor:'black'}} >Pay For Event</Button>
        </Link>
        </Box>
          </CardActions>
        </Card>
        </Link>
      </Box>
      </>
  );
}
