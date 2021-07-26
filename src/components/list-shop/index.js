import React, { useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shop from '../shop';
import useStyles from './style';
// import { auto } from 'async';



function ListShop(props){
    const classes = useStyles();
    useEffect(()=>{
        // console.log(props.listShop)
    },[])
    return (
        <div className={classes.root}>
        <Grid container spacing={2} className={classes.container}>
          {props.listShop.map((item)=>{
            return <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>
                          <Shop shop={item}/>
                      </Paper>
                  </Grid>
          })}
        </Grid>
      
    </div>
    )
}

export default ListShop;