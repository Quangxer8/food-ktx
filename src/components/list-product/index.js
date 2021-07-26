import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Shop from '../shop';
import useStyles from './style';
import Product from '../product';

// import { auto } from 'async';



function ListProduct(props){
    const classes = useStyles();
    // console.log(props.ListProduct);
    return (
        <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
          {props.listProduct.map((item)=>{
              return <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>
                            <Product product={item}/>
                        </Paper>
                    </Grid>
            })}
      </Grid>
      
    </div>
    )
}

export default ListProduct;