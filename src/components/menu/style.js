import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({

    root: {
        flexGrow: 1,
        width: '80%',
        margin: 'auto',
        
      },
    container:{
        width: '100%',
        margin: 'auto',
    },

    box:{
        backgroundColor: 'white',

    },

    // item:{
    //     height
    // },

    img_item:{
        width: 90,
        height: 60,
    },

    name_item:{
        margin: 0,
        fontSize: 17,
        color:"rgba(0,0,0,0.7)",
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontWeight: 700,
        marginTop:5
    },

    address_shop:{
        fontSize:12,
        color:'#252525',
        margin:0,
        marginTop:5,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    bottom_item:{
        textAlign: 'center'
    },

    price:{
        fontSize:13,
        fontWeight: 700,
        // color: '#0288d1',
        color: '#6cc942',
        margin:0,
        marginBottom: 5
    },

    button:{
        cursor:'pointer',
        fontSize: 12,
        padding: 2,
        backgroundColor: "#cf2127",
        opacity: 0.9,
        '&:hover':{
            cursor:'pointer',
            backgroundColor: "#cf2127",
            opacity: 1
        },
        paddingLeft: 10,
        paddingRight: 10,
    },

    link:{
        textDecoration: "none"
    }
}))

export default useStyles;