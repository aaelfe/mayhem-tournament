import React, {useEffect, useState} from 'react';
import { Container, AppBar, Typography, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import '@fontsource/roboto';
import Player from './components/PlayerDisplay/Player/Player.js';
import Rounds from './components/Rounds.js';
import useStyles from './styles';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay.js'
import tournamentGenerator from './functions/tournamentGenerator.js';
import TeamDisplay from './components/TeamDisplay.js';

const App = () => {

    const [players, setPlayers] = useState([]);
    const [rounds, setRounds] = useState(0);
    const [tournament, setTournament] = useState([]);

    const classes=useStyles();

    //tournamentGenerator([{name: "allan", id:1}, {name: "josh", id:2}, {name: "ethan", id:3}, {name: "steve", id:4}, {name: "ben", id:5}], 5, 5);

    return (
        <>
            <Container>
                <AppBar className={classes.appBar}>
                    <Typography variant="h3">
                        Team Randomizer
                    </Typography>
                </AppBar>
                <div className={classes.content}>
                    <Rounds className={classes.rounds} rounds={rounds} setRounds={setRounds}></Rounds>
                    <PlayerDisplay className={classes.players} players={players} setPlayers={setPlayers}></PlayerDisplay>
                    <TeamDisplay className={classes.tournament} tournament={tournament}></TeamDisplay>
                </div>
            </Container>
        </>
    )
};

export default App;