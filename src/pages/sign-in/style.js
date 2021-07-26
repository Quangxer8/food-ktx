import { makeStyles, theme } from "@material-ui/core";
// import img_background from '../../asset/background.jpg';

const useStyles = makeStyles((theme)=>({

    container:{
        backgroundImage: `url(https://p.w3layouts.com/demos/aug-2016/19-08-2016/classy_login_form/web/images/banner1.jpg)`,
        width:'100%',
        // height: '100%',
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        backgroundColor:'red',
    },

    wrap_all:{
        width: "100%",
        height: 800
        // backgroundColor: 'red'
    },

    box:{
        width: '60%',
        margin:'auto',
        textAlign: 'center',
        marginTop: 110
    },

    title:{
        fontSize: 45,
        fontWeight: 600,
        color: 'white',
    },

    root_input:{
        color: 'white',
        border: '1px solid white',
        borderRadius: theme.shape.borderRadius,
        height: '6vh',
        padding: theme.spacing(2),
        width: "51%",
        marginTop: 5,
        marginBottom: 15,
        '&:focus':{
            cursor: 'pointer'
        },
        '&:focus':{
            cursor: 'pointer'
        },
        cursor: 'pointer'
    },
    icon:{
        color:'white'
    },

    input:{
        width: "80%",
    },

    button:{
        width:"51%",
        padding: 5,
        marginTop: 20,
        fontSize: 18
    }
}))

export default useStyles;