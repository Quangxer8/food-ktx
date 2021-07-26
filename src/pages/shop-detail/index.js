import React, { useEffect, useState } from 'react';
import { Footer, Header, ListShop, Menu, ShopDetailInfor } from '../../components';
import useStyles from './style';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function ShopDetail(){

    const classes = useStyles();
    let id = useParams();
    // console.log(id.id);

    const [store,setStore] = useState({});
    const [listProduct,setListProduct] = useState([]);
    const [listStore,setListStore] = useState([]);

    useEffect(()=>{
        
        fetchStoreById();
        fetchProductByStore();
        // setTimeout(()=>{fetchProductByStore();},1000);
        // setTimeout(()=>{fetchStoreAll();},1000)
        fetchStoreAll();
        
    },[id.id])

    async function fetchStoreById(){
        Axios.get('http://localhost:3000/shop/getshop/'+ id.id)
        .then( res => {
            if( res.status == 200)
            {            
                let data = res.data   
                setStore(data);
                // console.log(store);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    async function fetchProductByStore(){
        Axios.get('http://localhost:3000/shop/getproduct/'+ id.id)
        .then( res => {
            if( res.status == 200)
            {            
                let data = res.data   
                setListProduct(data);
                // console.log(res.data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    async function fetchStoreAll(){
        Axios.get('http://localhost:3000/shop/getshop20')
        .then( res => {
            if( res.status == 200)
            {            
                let data = res.data   
                setListStore(data);
                // console.log(res.data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }


    return(
        <div className={classes.container}>
            <Header/>
            <div className={classes.wrap_shop_detail}>
                <ShopDetailInfor shop={store}/>
            </div>
            <h4 className={classes.title}>Thực đơn</h4>
                <Menu listProduct={listProduct}/>
            <h4 className={classes.title}>cửa hàng khác</h4>
            <div className={classes.list_shop}>
                <ListShop listShop={listStore}/> 
            </div>
            <Footer/>   
        </div>
    )
}

export default ShopDetail;