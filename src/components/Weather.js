import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../App.css';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Weather = ({weatherState}) => {
    // { this is Weather section for git}
    return (
        <div className="App">
            <Grid container spacing = {0.5}>
                {
                    Object.keys(weatherState).map((key) => {
                        
                        return (
                            <Grid item xs={2} sm={4} md={4}>
                                <Item style={{backgroundColor:"#226FB7"}}>
                                 <h3 style={{color:"white"}}>{key}</h3>
                                <h3>{weatherState[key]}</h3>
                                </Item>
                            </Grid>

                        )
                    })}
            </Grid>

        </div>
    )
}

export default Weather;
