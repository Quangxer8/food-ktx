import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) =>({
    
    container:{
        // borderBottom: '4px solid #ec5252',
        // borderTop: '3px solid #ec5252',
        // boxShadow: '3px 0px 6px -2px grey',
        height: 60,
        backgroundColor: 'white'

    },

    into_container:{
        height:60,
    },
    
    paper:{
        height:60,
        boxShadow:'none',
        position: 'relative'
    },

    wrap_logo:{
        // textAlign: 'end',
        position:'relative'
    },

    logo:{
        width: 80,
        position:'absolute',
        top: 0,
        right:0
    },

    grid_name:{
        position:'relative'
    },

    name:{
        fontSize:18,
        fontWeight: 700,
        position:'absolute',
        top: 15,
        // color: 'rgba(0,0,0,0.7)',
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

    

    margin: {
        // margin: theme.spacing(1),
        width: 550,
        height: 50,
        marginTop: 10,
        marginLeft: 10
      },

    button_search:{
        marginTop: 10,
        height:39,
        // marginLeft: 2
    },

    sign_in:{
        textAlign: 'end',

    },

    button_sign_in:{
        marginTop: 10,
        height:39,
        marginRight: 8
    },

    text_button:{
        textDecoration:'none',
    }
}));

export default useStyles;