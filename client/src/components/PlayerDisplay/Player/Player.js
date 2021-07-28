import React from 'react';
import { Typography, Container, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import '@fontsource/roboto';
import useStyles from './styles';
import * as api from '../../../api/index.js';

const Player = ({ player }) => {
    return (
        <ListItem>
            <ListItemText primary={player.name}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={()=>api.deletePlayer(player._id)}> 
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Player;