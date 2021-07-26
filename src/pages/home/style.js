import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor: '#eee',
    },

    header_list:{
        width: '100%',
        height:50,
        backgroundColor: 'white',
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: -10,
        
        // display: 'inline-block'
        marginBottom: 15
    },

    
    app_logo :{
        height: 50,
        // pointer-events: none;
      },
    
    header_control:{
        // height: 200,
        // width:800,
        // paddingRight: 10,
        // paddingLeft: 10,
        width: "100%",
        boxShadow: 'none'
    },

    text:{
        textTransform: 'capitalize',
        fontWeight: 700,
    },

    list_product:{
        width: "80%",
        margin: 'auto',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        border: '1px solid rgba(0,0,0,0.1)',
        borderTop: 'none',
        marginTop: 20,
    },

    list_product_add:{
        width: "80%",
        margin: 'auto',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        border: '1px solid rgba(0,0,0,0.1)',
        // borderLeft: 'none',
        // borderTop: 'none',
        marginTop: 50
    },


    category:{
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: 10,
        marginLeft: -10,    
    },

    item_fillter:{
        position: 'relative',
        cursor: 'pointer',
        '&:hover':{
            color: '#cf2127',
            cursor: "pointer",
        },
        fontSize: 14
    },
    

    icon:{
        position: 'absolute',
        right: 0
    },

    header_product:{
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        // justifyItems: 'center',
        paddingRight:10,
    },

    no_padding:{
        padding:0,
        margin: 0,
        color: '#cf2127',
        paddingRight:10,
        paddingTop: 15,
        width: '100%',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 20
        // height: 20
    },

    test:{
        color: "red"
    }
 
 
}))

export default useStyles;