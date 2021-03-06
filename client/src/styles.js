import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius:10,
        margin: "15px 0",
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    rounds: {
        display:'inline-block',
        margin: "0 0",
    },
    players: {
        display:'inline-block'
    },
    tournament: {

    },
    content: {
        margin: '100px 0 0 0',
        width: '160vh',
        alignItems: 'center'
    }
}));