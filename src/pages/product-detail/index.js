import React, { useEffect, useState } from 'react';
import { Footer, Header, ListShop, Menu, ProductDetailInfor } from '../../components';
import useStyles from './style';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function ProductDetail(){

    const classes = useStyles();
    let id = useParams();

    const [productDetail, setProductDetail] = useState({});
    const [productShop, setProductShop] = useState([]);
    const [productGetAll,setProductGetAll] = useState([]);
    const [productTypeDetail, setProductTypeDetail] = useState([]);
    const [shop,setShop] = useState([]);
    

    useEffect(()=>{
        fetchProductById();
        fetchAllProduct();
        fetchAllShop();
    },[id.id]);

    async function fetchProductById(){
        Axios.get('http://localhost:3000/product/'+ id.id)
        .then( res => {
            if( res.status == 200)
            {            
                let data = res.data;  
                setProductDetail(data);
                fetchAllProductById(data.product.shopID);
                fetchProductByTypeDetail(data.product.typedetail);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    async function fetchAllProductById(shopId){
        Axios.get('http://localhost:3000/shop/getproduct/'+ shopId)
        .then( res => {
            if( res.status == 200)
            {            
                let data = res.data;  
                setProductShop(data);
                // console.log(data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    async function fetchAllProduct(){
        Axios.get('http://localhost:3000/product/getproduct20')
        .then( res => {
            if( res.status == 200)
            {            
                let data = res.data.map((item)=>{
                    return item.product;
                })
                setProductGetAll(data);
                // console.log(data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    async function fetchAllShop(){
        Axios.get('http://localhost:3000/shop/getshop20')
        .then( res => {
            if( res.status == 200)
            {            
                let data = res.data; 
                setShop(data);
                // console.log(data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    async function fetchProductByTypeDetail(slug){
        Axios.get('http://localhost:3000/product/offer/'+slug)
        .then( res => {
            if( res.status == 200)
            {            
                let data = res.data.map((item)=>{
                    return item.product;
                })
                setProductTypeDetail(data);
                console.log(data);
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
                {productDetail != {} ? <ProductDetailInfor products={productDetail}/>: <div></div> }
            </div>
            <h4 className={classes.title}>món ăn tương tự</h4>
                {productDetail != [] ? <Menu listProduct={productShop}/>: <div></div> }
            <h4 className={classes.title}>món ăn đề xuất</h4>
                {productTypeDetail != [] ? <Menu listProduct={productTypeDetail}/>: <div></div> }
            <h4 className={classes.title}>món ăn nổi bật khác</h4>
                {productGetAll != [] ? <Menu listProduct={productGetAll}/>: <div></div> }
            <h4 className={classes.title}>cửa hàng khác</h4>
            <div className={classes.list_shop}>
                <ListShop listShop={shop}/>
            </div>
            <Footer/>   
        </div>
    )
}

export default ProductDetail;