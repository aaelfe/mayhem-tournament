import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Container, Paper, TextField, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import Player from './Player/Player.js'
import '@fontsource/roboto';

const PlayerDisplay = ({ names, setNames }) => {
    return (
        <Container>
            <List>
                {
                    names.map((player, index) => {
                        <Player name={player}></Player>
                    })
                }
            </List>
            <Paper>
                <form autoComplete="off" noValidate /*hand submit*/>
                    <TextField name="newPlayer" variant="outlined" label="New Player" fullWidth value='test' onChange={(e)=>{/*must adust*/}}/>
                    <Button variant="contained" size="small" type="submit" fullWidth>Submit</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Player;