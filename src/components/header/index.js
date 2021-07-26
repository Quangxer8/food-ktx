import React from 'react';
import useStyles from './style.js';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logoReact from '../../logo.svg';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { blue } from '@material-ui/core/colors';
import {
    ThemeProvider,
    createTheme,
  } from '@material-ui/core/styles';  
import Button from '@material-ui/core/Button';
// import {Link} from "react-router-dom";
  
    const theme = createTheme({
    palette: {
        primary: blue,
    },
    });

function Header(){

    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Grid container  className={classes.into_container}>
                <Grid item xs={6} sm={3}>
                    <Grid container className={classes.paper}>
                        <Grid item  sm={6} className={classes.wrap_logo}><Link to="/"><img src={logoReact} className={classes.logo}/></Link></Grid>
                        <Grid item  sm={6} className={classes.grid_name}><Link to="/"><span className={classes.name}>FOOD DORM</span></Link></Grid>
                    </Grid>
                    {/* <Paper className={classes.paper}>
                        <span className={classes.name}><img src={logoReact} className={classes.logo}/>fffwefe</span>
                    </Paper> */}
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Grid container className={classes.paper}>
                        <Grid item  sm={9} className={classes.wrap_logo}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    className={classes.margin}
                                    label="Search"
                                    variant="outlined"
                                    // color="primary"
                                    id="mui-theme-provider-outlined-input"
                                    size="small"
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid item  sm={3} >
                            <Button variant="outlined" color="primary" className={classes.button_search}>
                                Tìm Kiếm
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Grid container className={classes.paper} >
                            <Grid item  sm={6} className={classes.sign_in}>
                                <Link to="/signin" className={classes.text_button}>
                                    <Button variant="outlined" color="primary" className={classes.button_sign_in}>
                                        Đăng nhập
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item  sm={6} >
                                <Link to="/signUp" className={classes.text_button}>
                                    <Button variant="outlined" color="secondary" className={classes.button_search}>
                                        Đăng ký
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
        </div>
    )
}

export default Header;