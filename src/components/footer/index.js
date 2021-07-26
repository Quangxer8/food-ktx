import React from 'react';
import useStyles from './style.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logoReact from '../../logo.svg';

function Footer(){

    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Grid container  className={classes.into_container}>
                <Grid item xs={6} sm={4}>
                    <Grid container className={classes.paper}>
                        <Grid item  sm={6} className={classes.wrap_logo}><img src={logoReact} className={classes.logo} alt="oke"/></Grid>
                        <Grid item  sm={6} className={classes.grid_name}><span className={classes.name}>FOOD DORM</span></Grid>
                    </Grid>
                    {/* <Paper className={classes.paper}>
                        <span className={classes.name}><img src={logoReact} className={classes.logo}/>fffwefe</span>
                    </Paper> */}
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>
                        <div className={classes.into_paper_mid}>
                            <h5 className={classes.title_h5}>Thông tin liên lạc</h5>
                            <p className={classes.info_p}>Địa chỉ : ktx khu A</p>
                            <p className={classes.info_p}>Số điện thoại: 0967128491</p>
                            <p className={classes.info_p}>Email : 17520952@gm.uit.edu.vn</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>
                        <div className={classes.into_paper_mid}>
                            <h5 className={classes.title_h5}>Dream Team</h5>
                            <p className={classes.info_p}>Dev : Trần Minh Quang</p>
                            <p className={classes.info_p}>Dev : Vũ Văn Thành</p>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;