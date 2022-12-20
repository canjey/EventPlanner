import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';


function createData(image, name, calories, fat, carbs, protein) {
  return { image, name, calories, fat, carbs, protein };
}

const rows = [
  createData('images/bike.jpeg','Graduation Party', 10, 'Nairobi', 2000),
  createData('images/bike.jpeg', 'Graduation Party', 10, 'Nairobi', 2000),
  createData('images/bike.jpeg', 'Graduation Party', 10, 'Nairobi', 2000),
  createData('images/bike.jpeg', 'Graduation Party', 10, 'Nairobi', 2000),
  createData('images/bike.jpeg', 'Graduation Party', 10, 'Nairobi', 2000),
];

export default function TicketsTable() {
  return (
    <TableContainer component={Paper} sx={{borderStyle:'groove'}}>
      <Table sx={{ maxWidth: 850, mt:'2%' }} aria-label="simple table">
        <TableHead>
            <Box  sx={{display:'flex'}}>
            <Box xs={6} sx={{display:'flex'}}>
            <Typography>My Tickets                 
            </Typography>
            <SettingsIcon sx={{color:'green', ml:1}}/>
            </Box>
            <Box xs={6} sx={{display:'flex'}}>
            <Typography>
                Most Recent
            </Typography>
            <ArrowDropDownIcon sx={{color:'green', ml:1}} />
          </Box>
          </Box>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             
            >
                <TableCell sx={{display:'flex'}}>
                    <img src={row.image} width='100px'/>
                    <Typography sx={{mt:'10px', ml:2}}> {row.name}</Typography>
                    
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell><Button variant="contained"sx={{backgroundColor:'black'}}>Print  Ticket</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}