import React, { useEffect } from'react';
import useStyles from './style';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { parseNumberPrice } from '../../helper/index';
import {
    Link
  } from "react-router-dom";

function Menu(props){

    const classes = useStyles();
    let link = "/product/";

    useEffect(()=>{
        console.log(props.listProduct);
    },[props.listProduct])
    return(
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.container}>
                {props.listProduct.map((item)=>{
                    return <Grid item xs={6} sm={6} className={classes.box}>
                    <Grid container className={classes.item}>
                        <Grid item xs={6} sm={2}>
                            <img src={"http://localhost:3000/open_image?image_name=" + item.thumbnails[0]} alt={item.name} className={classes.img_item}/>
                        </Grid>
                        <Grid item xs={6} sm={7}>
                            <h3 className={classes.name_item}>{item.name}</h3>
                            <p className={classes.address_shop}>{item.description}</p>
                        </Grid>
                        <Grid item xs={6} sm={3} className={classes.bottom_item}>
                            <p className={classes.price}>{parseNumberPrice(item.priceStart)} - {parseNumberPrice(item.priceEnd)} đ</p>
                            <Link to={link+item._id} className={classes.link}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    // startIcon={<DeleteIcon />}
                                >
                                    Xem chi tiết
                                </Button>    
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                })}
                
               
            </Grid>
        </div>
    )
}

export default Menu;