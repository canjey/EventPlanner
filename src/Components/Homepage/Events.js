import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import {Link} from "react-router-dom";
 

const pages = ["All ", "For you", "Online", "Today", "This Weekend", "Free", "Music", "Location"];
const events = []

export default function Events() {
  return (
    <Card
      sx={{ minWidth: 275, ml: { xs: "5%", md: "7%" }, mr: "7%", mt: "2%" }}
    >
        
      <CardContent>
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex", md: "flex", flexWrap:'wrap' }, ml: "20%" }}
        >
          {pages.map(page =>
            <Button
              key={page}
              sx={{ my: 2, color: "text.secondary", display: "block" }}
            >
              {page}
            </Button>
          )}
        </Box>
        <Typography variant="h5" component="div" />
        <Typography sx={{ mb: 1.5, ml:5 }}>All Events</Typography>
        <Box sx={{ display: {md: 'flex'}, flexWrap:{md:'wrap'}, ml:'2%'}}>
        <Link to = "./eventsDetails" style={{textDecoration:'none'}}>
        <Card sx={{ width: 350 , mb:2, ml:2}}>
          <CardMedia
            component="img"
            height="140"
            image="/images/bike.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Link>
        <Link to = "./eventsDetails" style={{textDecoration:'none'}}>
        <Card sx={{ width: 350 , mb:2 , ml:2}}>
          <CardMedia
            component="img"
            height="140"
            image="/images/bike.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
            </Link>
        <Card sx={{ width: 350 , mb:2, ml:2 }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/bike.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 350 , mb:2 , ml:2}}>
          <CardMedia
            component="img"
            height="140"
            image="/images/bike.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 350 , mb:2 , ml:2}}>
          <CardMedia
            component="img"
            height="140"
            image="/images/bike.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: 350 , mb:2 , ml:2}}>
          <CardMedia
            component="img"
            height="140"
            image="/images/bike.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>

            
          </CardActions>
        </Card>

        
        </Box>
        <Box sx={{marginLeft:'45%'}}>
        <Button variant="contained" sx={{backgroundColor:'black'}} >Load More</Button>
        </Box>
       </CardContent>
    </Card>
  );
}
