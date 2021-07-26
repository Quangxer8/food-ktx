import React, { useEffect, useState } from'react';
import useStyles from './style';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    Link,
    useParams
  } from "react-router-dom";

  import { formatCash, parseNumberPrice } from '../../helper/index';

function ProductDetailInfor(props){

    const [product, setProduct] = useState({});
    const [shop, setShop] = useState({});
    const classes = useStyles();
    // let id = useParams();
    // console.log(id);
    useEffect(()=>{
        setShop(props.products.shop);
        setProduct(props.products.product);
        // console.log(props.products);
    },[props.products]);
    return(
                // <div></div>
        <div >
            {props.products.product == undefined ? <div></div>:<div className={classes.root}>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={6} sm={5}>
                    <div className={classes.wrap_img_infor}>
                        <img src={"http://localhost:3000/open_image?image_name=" + props.products.product.thumbnails[0]} alt={props.products.product.name} className={classes.img_infor}/>
                    </div>
                </Grid>
                <Grid item xs={6} sm={7}>
                    <div className={classes.wrap_infor_shop}>
                        <div className={classes.infor_shop}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link to="/Home" color="inherit" className={classes.text_convert}>Home</Link>
                                <Typography color="textPrimary"  className={classes.text_convert}>{props.products.product.name}</Typography>
                            </Breadcrumbs>
                            <Grid container  className={classes.container} >
                                <Grid item xs={6} sm={6} >
                                    <h3 className={classes.name_shop}>{props.products.product.name}</h3>
                                    {/* <p className={classes.address_shop}>202 Đường Số 8, P. 11, Gò Vấp, TP. HCM</p> */}
                                    <div className={classes.time}>
                                        <FiberManualRecordIcon className={classes.icon_time}/>
                                        <span className={classes.text_time}>Giá tiền: {parseNumberPrice(props.products.product.priceStart)} - {parseNumberPrice(props.products.product.priceEnd)}</span>
                                    </div>
                                    <div className={classes.time}>
                                        <FiberManualRecordIcon className={classes.icon_time}/>
                                        <span className={classes.text_time}>Loại: <span>{props.products.product.type == 'drinks' ? 'Đồ uống / Coffee' : 'Đồ ăn / Food'}</span></span>
                                    </div>
                                    <div className={classes.time}>
                                        <FiberManualRecordIcon className={classes.icon_time}/>
                                        <span className={classes.text_time}>Thời điểm ăn: {props.products.product.session}</span>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={5} className={classes.border}>
                                    <h3 className={classes.name_shop}>{props.products.shop.name}</h3>
                                    <p className={classes.address_shop}>{props.products.shop.address}</p>
                                    <div className={classes.time}>
                                        <FiberManualRecordIcon className={classes.icon_time}/>
                                        <span className={classes.text_time}>Thời gian mở cửa: {props.products.shop.timeOpen} - {props.products.shop.timeClose}</span>
                                    </div>
                                    <div className={classes.time}>
                                        <FiberManualRecordIcon className={classes.icon_time}/>
                                        <span className={classes.text_time}>Điện thoại liên lạc: 0967 128 491</span>
                                    </div>
                                    <Link to={'/shop/'+props.products.shop._id} className={classes.text_de}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                        >
                                            tham quan cửa hàng
                                        </Button> 
                                    </Link>
                                </Grid>
                            </Grid>
                            <p className={classes.description}>{props.products.product.description}</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>}
        </div>

           
    )
}

export default ProductDetailInfor;