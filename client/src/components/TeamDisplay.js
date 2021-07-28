import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core'
import useStyles from './styles';

const TeamDisplay = ({tournament}) => {
    const classes=useStyles();

    //here need to get data about players from player/playerdisplay and put in array

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                {/*here need to map player data array and create elements*/}
            </Grid>
        </Paper>
    );
}

export default TeamDisplay;