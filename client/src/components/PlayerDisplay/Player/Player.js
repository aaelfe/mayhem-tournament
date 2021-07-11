import React from 'react';
import { Typography, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import '@fontsource/roboto';

const Player = ({ name }) => {
    return (
        <Container>
            <Typography variant="h5">
                {name} &nbsp;
                <DeleteIcon/>
            </Typography>
        </Container>
    )
}

export default Player;