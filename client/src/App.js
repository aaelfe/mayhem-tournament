import React, {useState} from 'react';
import { Container, AppBar, Typography, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import '@fontsource/roboto';
import Player from './components/PlayerDisplay/Player/Player.js';
import Rounds from './components/Rounds.js';
import useStyles from './styles';
import PlayerDisplay from './components/PlayerDisplay/PlayerDisplay.js'

const App = () => {

    const [players, setPlayers] = useState([]);
    const [rounds, setRounds] = useState(0);

    const classes=useStyles();

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