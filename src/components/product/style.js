import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme)=>({
    container:{
        width: '100%',
        // background: 'red',
        height: 300,
        
    },

    link_page:{
        textDecorationLine:'none',
        color:'rgba(0,0,0,0.8)',
        textAlign: 'left',
    },

    top:{
        width: '100%',
        height: 180,
    },

    tag_img:{
        width: '100%',
        height: 170,
    },

    mid:{
        width: '100%',
        height: 60,
    },

    name_product:{
        margin: 0,
        width: '90%',
        marginLeft: "5%",
        height: 27,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: 15,
        fontWeight: '600',
    },

    name_address:{
        margin: 0,
        width: '90%',
        marginLeft: "5%",
        height: 27,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: 12   
    },

    bottom:{
        width: '100%',
        height: 59, 
        borderTop: '1px solid rgba(0,0,0,0.1)'
    },

    bottom_tag:{
        height: 29,
        margin: 'auto',
        marginTop: 15,
    },

    icon:{
        color:"#EE0000",
        marginLeft: 5,
        marginRight: 15,
        fontSize: 15
    },

    tag:{
        fontSize: 14,
        fontWeight: 600
    },

}));

export default useStyles;