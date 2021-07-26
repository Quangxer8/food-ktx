import React, { useState } from 'react';
import useStyles from './style';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { InputBase } from '@material-ui/core';
import Button from '@material-ui/core/Button'; 
import Axios from 'axios';

function SignUp(){

    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPasswrod] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [fullName, setFullName] = useState('');

    async function asyncLogin(){

        if(password!=confirmPassword){
            alert("Mật khẩu nhập lại của bạn không chính xác!!!");
            return 0;
        }

        Axios.post('http://localhost:3000/user/signup',
        {
            'email':email,
            'password':password,
            'password_comfirmation': confirmPassword,
            'phone_number': phone,
            'fullname': fullName
        })
        .then(res=>{
            console.log(res);
            console.log("oke");
        })
        // console.log("oke");
        
    }

    function Login(){
        if(password!=confirmPassword){
            alert("Mật khẩu nhập lại của bạn không chính xác!!!");
            return 0;
        }
        else{
            asyncLogin();
        }
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

                        <InputBase id="outlined-basic" 
                            className={classes.root_input} label="Outlined" 
                            placeholder="confirm password"
                            variant="outlined" 
                            type="password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        >
                        </InputBase>
                        <InputBase id="outlined-basic" 
                            className={classes.root_input} label="Outlined" 
                            placeholder="full name"
                            variant="outlined" 
                            // type="password"
                            value={fullName}
                            onChange={(e)=>setFullName(e.target.value)}
                        >
                        </InputBase>
                        <InputBase id="outlined-basic" 
                            className={classes.root_input} label="Outlined" 
                            placeholder="phone"
                            variant="outlined" 
                            // type="password"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        >
                        </InputBase>

                        <div>
                            <Button variant="contained" color="secondary" 
                            className={classes.button}
                            onClick={Login}
                            >
                                Đăng ký
                            </Button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;