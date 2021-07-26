import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        width: '80%',
        margin: 'auto',
        backgroundColor: 'white'
      },
    container:{
        width: '100%',
        margin: 'auto',
        // boxShadow: 'none'
    },

    wrap_img_infor:{
        width: '100%',
        textAlign: 'end'
    },

    

    img_infor:{
        width: 500,
        height: 310
    },

    wrap_infor_shop:{
        width: "100%",
        // textAlign:'end',
    },

    infor_shop:{
        width:"95%",
        marginLeft: '5%'
    },

    text_convert:{
        textDecoration: 'none',
        color: '#187CAA',
        // fontWeight: 600,
        fontSize: 14,
        // '&:hover':{
        //     color: 'rgba(0,0,0,0.8)',
           
        // },
    },

    kind_shop:{
        textTransform: 'uppercase',
        fontSize:11,
        color:'#959595',
        margin:0,
        marginTop:20,
    },

    name_shop:{
        margin:0,
        color: 'rgba(0,0,0,0.7)',
        fontSize: 22,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    address_shop:{
        fontSize:12,
        color:'#252525',
        margin:0,
        marginTop:5,
    },

    time:{
        marginTop: 5
    },

    icon_time:{
        color:"#6cc942",
        fontSize:12
    },

    text_time:{
        color:"#6cc942",
        fontSize:14,
        marginLeft:5
    },

    phone:{
        color:'#252525',
        margin:0,
        fontSize:14,
    },

    description:{
        borderTop: "1px solid rgba(0,0,0,0.2)",
        fontSize: 14,
        lineHeight: 1.5,
        paddingTop: 5,
        color:'rgba(0,0,0,0.7)',
        fontWeight: 500,
        marginTop:25,
    }
}));

export default useStyles;