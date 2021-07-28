import React, {useState} from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Container, Paper, TextField, Button, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Player from './Player/Player.js';
import '@fontsource/roboto';
import useStyles from './styles';
import * as api from '../../api';


const PlayerDisplay = ({ players, setPlayers }) => {
    const classes=useStyles();

    const [newPlayer, setNewPlayer] = useState({name:''});

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newPlayer) {
            api.createPlayer(newPlayer);
            clear();
        }
    }

    const clear = () => {
        setNewPlayer({name:''});
    }

    return (
            <Paper className={classes.paper}>
                <List>
                    {
                        players.map((player) => {
                            <Player name={player.name}></Player>
                        })
                    }
                </List>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextField name="newPlayer" variant="outlined" label="New Player" fullWidth value={newPlayer.name} onChange={(e)=>{setNewPlayer({name:e.target.value})}}/>
                    <Button variant="contained" size="small" type="submit" fullWidth>Add</Button>
                </form>
            </Paper>
    )
}

export default PlayerDisplay;