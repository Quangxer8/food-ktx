import React, { useEffect, useState } from 'react';
import { Carousel, Footer, ListProduct, ListShop, Header } from '../../components/index';
import useStyles from './style.js';
// import './style.css'
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import logoReact from '../../logo.svg';
import Axios from 'axios';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Icon from '@material-ui/core/Icon';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
        className={classes.test}
      >
        {value === index && <Box >{children}</Box>}
      </Typography>
    );
  }

//   const useStyles = makeStyles((theme) => ({
    
    
//   }));

function Home(){

    const classes = useStyles();

    const [shop,setShop] = useState([]);
    const [shopZoneA,setShopZoneA] = useState([]);
    const [shopZoneB,setShopZoneB] = useState([]);
    const [shopTypeStore,setShopTypeStore] = useState([]);
    const [shopTypeCoffee,setShopTypeCoffee] = useState([]);
    // const [tabSlug,setTabSlug] = useState('');
    // const [shopType, setShopType] = useState('');

    const [product, setProduct] = useState([]);
    

    useEffect(()=>{
        fetchStore();   
        fetchStoreZone('khuA');
        fetchStoreZone('khuB');
        fetchStoreType('store');
        fetchStoreType('coffee');
        // fetchStoreSession();
        fetchProduct();
    },[])

    async function fetchStore(){
        Axios.get('http://localhost:3000/shop/getshop20')
        .then( res => {
            if( res.status == 200)
            {                
                let array = res.data
                setShop(array);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    async function fetchStoreZone(tabSlug){
        if(tabSlug == 'khuA')
        {
            Axios.get('http://localhost:3000/shop/zone/'+tabSlug)
            .then( res => {
                if( res.status == 200)
                {                
                    let array = res.data;
                    setShopZoneA(array);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
        if(tabSlug == 'khuB'){
            Axios.get('http://localhost:3000/shop/zone/'+tabSlug)
            .then( res => {
                if( res.status == 200)
                {                
                    let array = res.data;
                    setShopZoneB(array);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    async function fetchStoreType(shopType){    
        if(shopType == 'coffee'){
            Axios.get('http://localhost:3000/shop/type/'+shopType)
            .then( res => {
                if( res.status == 200)
                {                
                    let array = res.data;
                    setShopTypeCoffee(array);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
        if(shopType == 'store'){
            Axios.get('http://localhost:3000/shop/type/'+shopType)
            .then( res => {
                if( res.status == 200)
                {                
                    let array = res.data;
                    setShopTypeStore(array);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }


    async function fetchProduct(){
        Axios.get('http://localhost:3000/product/getproduct20')
            .then( res => {
                if( res.status == 200)
                {                
                    let array = res.data;
                    // console.log(array);
                    setProduct(array);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    async function fetchProductByType(type){
        Axios.get('http://localhost:3000/product/type/'+type)
            .then( res => {
                if( res.status == 200)
                {                
                    let array = res.data;
                    // console.log(array);
                    setProduct(array);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    async function fetchProductBySession(session){
        Axios.get('http://localhost:3000/product/session/'+session)
            .then( res => {
                if( res.status == 200)
                {                
                    let array = res.data;
                    // console.log(array);
                    setProduct(array);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


  
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    const handleChangeIndex = (index) => {
    setValue(index);
    };


    function testClick(object){
        if(object.type=='normal')
        {
            fetchProduct();
        }
        if(object.type=='type'){
            fetchProductByType(object.content);
        }
        if(object.type=='session'){
            fetchProductBySession(object.content);
        }
    }

    return(
        <div className={classes.container}>
            <Header/>
            <Carousel/>
            <div className={classes.list_product}>
                <div className={classes.header_list}>   
                        <AppBar position="static" color="white" className={classes.header_control}>
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="none"
                            textColor="secondary"
                            variant="fullWidth"
                            aria-label="action tabs example"
                            size="small"
                            >
                            {/* <Tab label="Nổi Bật" className={classes.text} onClick={fetchStore()}/>
                            <Tab label="Khu A" className={classes.text} onClick={() => {setTabSlug('khuA');fetchStoreZone()}}/>
                            <Tab label="Khu B" className={classes.text} onClick={() => {setTabSlug('khuB');fetchStoreZone()}}/>
                            <Tab label="Food" className={classes.text} onClick={() => {setShopType('store');fetchStoreType()}}/>
                            <Tab label="Coffee" className={classes.text} onClick={() => {setShopType('coffee');fetchStoreType()}}/> */}
                            <Tab label="Nổi Bật" className={classes.text}/>
                            <Tab label="Khu A" className={classes.text} />
                            <Tab label="Khu B" className={classes.text} />
                            <Tab label="Food" className={classes.text} />
                            <Tab label="Coffee" className={classes.text} />
                            </Tabs>
                        </AppBar>
                    {/* </div> */}
                </div>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={value}
                    onChangeIndex={handleChangeIndex}      
                    >
                    <TabPanel value={value} index={0} dir={theme.direction} >
                        <ListShop listShop={shop}/>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction} >
                        <ListShop listShop={shopZoneA}/>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction} >
                        <ListShop listShop={shopZoneB}/>
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <ListShop listShop={shopTypeStore}/>
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                        <ListShop listShop={shopTypeCoffee}/>
                    </TabPanel>
                </SwipeableViews>       
            </div>

            <div className={classes.list_product_add}>
                <Grid container spacing={1} >
                    <Grid item xs={6} sm={2}>
                        <div className={classes.category}>
                            {/* <Paper className={classes.root}> */}
                                <div>
                                    <img src={logoReact} fill="white" alt="logoPage" className={classes.test}/>
                                </div>
                                <MenuList>
                                    <MenuItem className={classes.item_fillter} onClick={()=>{testClick({type:'normal'})}}  >
                                        <Typography variant="inherit">Tất cả món ăn</Typography>
                                        <ListItemIcon className={classes.icon}>
                                            <ChevronRightIcon />
                                        </ListItemIcon>
                                    </MenuItem>
                                    <MenuItem className={classes.item_fillter} onClick={()=>{testClick({type:'type', content:'drinks'})}}>
                                        <Typography variant="inherit">Đồ uống / Coffee</Typography>
                                        <ListItemIcon  className={classes.icon}>
                                            <ChevronRightIcon />
                                        </ListItemIcon>
                                    </MenuItem>
                                    <MenuItem className={classes.item_fillter}  onClick={()=>{testClick({type:'type', content:'food'})}}>
                                        <Typography variant="inherit" noWrap>
                                            Đồ ăn / Food
                                        </Typography>
                                        <ListItemIcon  className={classes.icon}>
                                            <ChevronRightIcon />
                                        </ListItemIcon>
                                    </MenuItem>
                                    <MenuItem className={classes.item_fillter}  onClick={()=>{testClick({type:'session', content:'sang'})}}>
                                        <Typography variant="inherit" noWrap>
                                            Buổi sáng
                                        </Typography>
                                        <ListItemIcon  className={classes.icon}>
                                            <ChevronRightIcon />
                                        </ListItemIcon>
                                    </MenuItem>
                                    <MenuItem className={classes.item_fillter}  onClick={()=>{testClick({type:'session', content:'trua'})}}>
                                        <Typography variant="inherit" noWrap>
                                            Buổi trưa
                                        </Typography>
                                        <ListItemIcon  className={classes.icon}>
                                            <ChevronRightIcon />
                                        </ListItemIcon>
                                    </MenuItem>
                                    <MenuItem className={classes.item_fillter}  onClick={()=>{testClick({type:'session', content:'chieu'})}}>
                                        <Typography variant="inherit" noWrap>
                                            Buổi tối
                                        </Typography>
                                        <ListItemIcon  className={classes.icon}>
                                            <ChevronRightIcon />
                                        </ListItemIcon>
                                    </MenuItem>
                                    <MenuItem className={classes.item_fillter}  onClick={()=>{testClick({type:'session', content:'all'})}}>
                                        <Typography variant="inherit" noWrap>
                                            Ăn cả ngày
                                        </Typography>
                                        <ListItemIcon  className={classes.icon}>
                                            <ChevronRightIcon />
                                        </ListItemIcon>
                                    </MenuItem>
                                </MenuList>
                            {/* </Paper> */}
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={10} >
                        <div className={classes.header_product}>
                            <p className={classes.no_padding}>FOOD DORM</p>
                        </div>
                        <ListProduct listProduct={product}/>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;