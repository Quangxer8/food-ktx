import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) =>({
    
    container:{
        borderBottom: '6px solid #ec5252',
        boxShadow: '3px 0px 6px -2px grey',
        marginTop: 30,
        height: 180,
        backgroundColor: 'white'
    },

    into_container:{
        height:180,
    },
    
    paper:{
        height:180,
        boxShadow:'none',
        position: 'relative'
    },

    wrap_logo:{
        // textAlign: 'end',
        position:'relative'
    },

    logo:{
        width:150,
        position:'absolute',
        top: 37,
        right:0
    },

    grid_name:{
        position:'relative'
    },

    name:{
        fontSize:26,
        fontWeight: 700,
        position:'absolute',
        top: 74,
        // color: 'rgba(0,0,0,0.7)'
        color:'#e91e63'
    },

    into_paper_mid:{
        width: 250,
        margin:'auto',
        paddingTop:15,
    },

    into_paper_right:{
        paddingTop:15,
    },

    title_h5:{
        fontSize: 20,
        margin:0,
        lineHeight: 2
    },

    info_p:{
        margin:0,
        lineHeight: 1.5
    }
}));

export default useStyles;