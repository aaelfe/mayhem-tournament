import React, {useEffect, useState} from 'react';
import { Container, AppBar, Typography, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import '@fontsource/roboto';
import Player from './components/PlayerDisplay/Player/Player.js';
import Rounds from './components/Rounds.js';
import useStyles from './styles';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay.js'
import tournamentGenerator from './functions/tournamentGenerator.js';

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
                    <Typography variant="h2">
                        Team Randomizer
                    </Typography>
                </AppBar>
                {/*<Accordion>
                    <AccordionSummary>
                        Test
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>TestItem</li>
                            <li>TestItem2</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>*/}
                <Rounds className={classes.rounds} rounds={rounds} setRounds={setRounds}></Rounds>
                <PlayerDisplay names={players} setNames={setPlayers}></PlayerDisplay>
            </Container>
        </>
    )
};

export default App;