import React from 'react';
import { Typography, Container, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import '@fontsource/roboto';
import useStyles from './styles';

const Player = ({ name }) => {
    return (
        <ListItem>
            <ListItemText primary={name}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Player;