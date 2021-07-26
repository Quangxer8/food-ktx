import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        width: '100%',
      },
      container:{
          width: '100%',
          margin: 'auto',
          padding: 0,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding: 0,
        // height:100
      },
      test:{
          height:200,
      }
}))


export default useStyles;