import React from 'react';
import useStyles from './style.js';
import { Link } from 'react-router-dom';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { parseNumberPrice } from '../../helper/index';

function Product(props){

    const classes = useStyles();
    let link = "/product/" + props.product.product._id;
    // console.log(props.product.product.thumbnails[0]);
    return(
        <div className={classes.container}>
            <Link to={link} className={classes.link_page}>
                <div className={classes.top}>
                    <img src={"http://localhost:3000/open_image?image_name="+props.product.product.thumbnails[0]} alt={props.product.product.name} className={classes.tag_img}/>
                </div>
                <div className={classes.mid}>
                    <p className={classes.name_product}>{props.product.product.name}</p>
                    <p className={classes.name_address}>{props.product.product.description}</p>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.bottom_tag}>
                        <LocalOfferIcon className={classes.icon}/>
                        <span className={classes.tag}>{parseNumberPrice(props.product.product.priceStart)} - {parseNumberPrice(props.product.product.priceEnd)} <u>đ</u></span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product;