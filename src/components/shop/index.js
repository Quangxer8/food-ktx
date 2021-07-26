import React from 'react';
import useStyles from './style.js';
import { Link } from 'react-router-dom';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function Shop(props){

    const classes = useStyles();
    // console.log(props.shop);

    let link = "/shop/" + props.shop._id;
    // console.log(link);

    return(
        <div className={classes.container}>
            <Link to={link} className={classes.link_page}>
                <div className={classes.top}>
                    <img src={"http://localhost:3000/open_image?image_name=" + props.shop.thumbnails} alt={props.shop.name} className={classes.tag_img}/>
                </div>
                <div className={classes.mid}>
                    <p className={classes.name_product}>{props.shop.name}</p>
                    <p className={classes.name_address}>{props.shop.address}</p>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.bottom_tag}>
                        <LocalOfferIcon size="small" className={classes.icon}/>
                        <span className={classes.tag}>{props.shop.type == 'coffee' ? 'Coffee/Dessert' : 'Shop/Stores'}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Shop;