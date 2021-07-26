import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=>({

    container:{
        backgroundColor: '#eee',
    },

    wrap_shop_detail:{
        width: '100%',
        backgroundColor: 'white',
    },

    title:{
        margin:0,
        textTransform: 'uppercase',
        fontSize:16,
        fontWeight: 700,
        marginLeft: '10%',
        color: '#cf2127',
        marginTop: 35,
        marginBottom:5
    },

    list_shop:{
        width: '80%',
        backgroundColor: 'white',
        margin:'auto',
    }

}));

export default useStyles;