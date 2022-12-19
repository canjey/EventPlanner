import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import PropTypes from 'prop-types';


async function loginUser(credentials){
    return fetch('http://m-subscribe-dev.eba-kpdc2e68.eu-central-1.elasticbeanstalk.com/', {
        method: 'POST',
        headers: {
            'Content-type':'application-json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [token, setToken] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
    }

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item md={6} sx={{padding:'10%'}}>
                        <Typography variant='h6'> Welcome </Typography>
                        <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            type="text"
                            id="outlined-required"
                            label="Email Address"
                            placeholder="Email Address"
                            name='email'
                            fullWidth
                            onChange={e => setEmail(e.target.value)}
                            sx={{mt:'2%'}}
                        />
                        <TextField
                            required
                            type="password"
                            id="outlined-required"
                            label="Password"
                            name='passord'
                            placeholder="Password"
                            fullWidth
                            onChange={e => setPassword(e.target.value)}
                            sx={{mt:'10%'}}
                        />
                        <Button type="submit" variant="contained" fullWidth sx={{mt:'10%', backgroundColor:'black',color:'green'}} >LOGIN</Button>
                        </form>
                    </Grid>
                    <Grid item md={6}>
                        <img src="StorySet.svg" />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

