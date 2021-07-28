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

    useEffect(() => {
        setTournament(tournamentGenerator(players, rounds));
    }, [players]);
    useEffect(() => {
        console.log('test');
    }, [rounds]) //For this to work best might want to fix issue where rounds updates for anything typed in box

    //teamGenerator([{name: "allan", id:1}, {name: "josh", id:2}, {name: "ethan", id:3}, {name: "steve", id:4}, {name: "ben", id:5}], 5); TEST

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
                    <PlayerDisplay className={classes.players} players={[{name:'allan'},{name:'steve'}]} setPlayers={setPlayers}></PlayerDisplay>
                    <TeamDisplay className={classes.tournament} tournament={tournament}></TeamDisplay>
                </div>
            </Container>
        </>
    )
};

export default App;