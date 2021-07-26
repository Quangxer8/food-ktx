import React from'react';
import useStyles from './style';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import Typography from '@material-ui/core/Typography';
import {
    Link
  } from "react-router-dom";

function ShopDetailInfor(props){

    const classes = useStyles();
    // console.log(props.shop)
    return(
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={6} sm={5}>
                    <div className={classes.wrap_img_infor}>
                        <img src={"http://localhost:3000/open_image?image_name="+props.shop.thumbnails} alt={props.shop.name} className={classes.img_infor}/>
                    </div>
                </Grid>
                <Grid item xs={6} sm={7}>
                    <div className={classes.wrap_infor_shop}>
                        <div className={classes.infor_shop}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link to="/Home" color="inherit" className={classes.text_convert}>Home</Link>
                                <Typography color="textPrimary"  className={classes.text_convert}>{props.shop.name}</Typography>
                            </Breadcrumbs>
                            <p className={classes.kind_shop}>{props.shop.type == 'coffee' ? 'Coffee/Dessert' : 'Shop/Stores'}</p>
                            <h3 className={classes.name_shop}>{props.shop.name}</h3>
                            <p className={classes.address_shop}>{props.shop.address}</p>
                            <div className={classes.time}>
                                <FiberManualRecordIcon className={classes.icon_time}/>
                                <span className={classes.text_time}>Thời gian mở cửa: {props.shop.timeOpen} - {props.shop.timeClose}</span>
                            </div>
                            <div className={classes.time}>
                                <FiberManualRecordIcon className={classes.icon_time}/>
                                <span className={classes.text_time}>Điện thoại liên lạc: 0967 128 491</span>
                            </div>
                            <p className={classes.description}>{props.shop.description}</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ShopDetailInfor;