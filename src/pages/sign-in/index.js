import React, { useState } from 'react';
import useStyles from './style';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { InputBase } from '@material-ui/core';
import Button from '@material-ui/core/Button'; 
import Axios from 'axios';

function SignIn(){

    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPasswrod] = useState('');

    async function Login(){
        Axios.post('http://localhost:3000/user/login',
        {
            'email':email,
            'password':password
        })
        .then(res=>{
            console.log(res);
            console.log("oke");
        })
        // console.log("oke");
        
    }

    return(
        <div className={classes.container}>
            <div className={classes.wrap_all}>
                <div className={classes.box}>
                    <h4 className={classes.title}>FOOD DORM</h4>
                        <InputBase id="outlined-basic" 
                            className={classes.root_input} label="Outlined" 
                            placeholder="username"
                            variant="outlined" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        >

                        </InputBase>
                        <InputBase id="outlined-basic" 
                            className={classes.root_input} label="Outlined" 
                            placeholder="password"
                            variant="outlined" 
                            type="password"
                            value={password}
                            onChange={(e)=>setPasswrod(e.target.value)}
                        >
                        </InputBase>

                        <div>
                        <Button variant="contained" color="secondary" 
                        className={classes.button}
                        onClick={Login}
                        >
                             Đăng nhập
                        </Button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;