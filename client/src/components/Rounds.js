import React, {useState} from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import useStyles from './styles';

const Rounds = ({rounds, setRounds}) => {

    const [roundData, setRoundData] = useState();

    const classes=useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        setRounds(e.target.value)
        console.log(rounds);
    } //THIS HANDLE SUBMIT ISNT ACTUALLY UPDATING ROUNDS PROPERLY, HAPPENING IN TEXTFIELD ONCHANGe

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <TextField name="numRounds" variant="outlined" label="Number of Rounds" fullWidth value={roundData} onChange={(e)=>{setRoundData(e.target.value);setRounds(e.target.value);}}/>
                <Button variant="contained" size="small" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default Rounds;