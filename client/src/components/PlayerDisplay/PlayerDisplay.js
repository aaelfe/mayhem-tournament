import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Container, Paper, TextField, Button, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import Player from './Player/Player.js'
import '@fontsource/roboto';
import useStyles from './styles';


const PlayerDisplay = ({ players, setPlayers }) => {
    const classes=useStyles();

    return (
            <Paper className={classes.paper}>
                <List>
                    {
                        players.map((player) => {
                            <Player name={player.name}></Player>
                        })
                    }
                </List>
                <form autoComplete="off" noValidate>
                    <TextField name="newPlayer" variant="outlined" label="New Player" fullWidth value='test' onChange={(e)=>{}}/>
                    <Button variant="contained" size="small" type="submit" fullWidth>Submit</Button>
                </form>
            </Paper>
    )
}

export default PlayerDisplay;