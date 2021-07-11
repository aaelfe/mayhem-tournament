import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius:10,
        margin: "15px 0",
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    rounds: {
        display:'flex',
        margin: "100px 0",
        flexDirection:'row'
    }
}));