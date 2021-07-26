import React, { useEffect, useState } from 'react';
import useStyles from'./style';

import m1 from '../../asset/m1.jpg';
import m2 from '../../asset/m2.jpg';
import m3 from '../../asset/m3.jpg';
import m4 from '../../asset/m4.jpg';
import m5 from '../../asset/m5.jpg';
import m6 from '../../asset/m6.jpg';
import vn1 from '../../asset/vn1.jpg';
import vn2 from '../../asset/vn2.jpg';

function Carousel(){

    const [index,setIndex] = useState(0);
    const classes = useStyles();

    const arrayImg = [[vn1],[m1,m2,m3],[vn2],[m4,m5,m6]];
    const arrayDiv = arrayImg.map((item,key)=>{
        if(item.length == 1){
            return <div><img src={item[0]} alt="vn1" className={classes.img_lg}/></div>
        }
        else{
            return <div>
                        <img src={item[0]} alt="m1" className={classes.img_sm}/>
                        <img src={item[1]} alt="m2" className={classes.img_sm_sm}/>
                        <img src={item[2]} alt="m3" className={classes.img_sm}/>
                    </div>
        }
    })

    // function runSlide(){ 
    //     setInterval(function(){
    //         console.log(index);
    //         // if(index < 0) setIndex(0);
    //         if(index != 3) {setIndex(index+1);}
    //         else setIndex(0);
            

    //         console.log("oke")
    //     },2000);
    // }

    useEffect(()=>{
        const clearTime = setTimeout(()=>{
            if(index < arrayDiv.length - 1)
            {
                setIndex(index+1);
            }
            else{
                setIndex(0)
            }
        },3000);
        return () => clearTimeout(clearTime);
    },[index])

    return(
        <div className={classes.container} style={{display: "inline"}}>
            {/* <div style={{display: "inline-block"}}>
                <img src={m1} alt="m1" className={classes.img_sm}/>
                <img src={m2} alt="m2" className={classes.img_sm_sm}/>
                <img src={m3} alt="m3" className={classes.img_sm}/>
            </div>
            <div style={{display: "inline-block"}}>
                <img src={vn1} alt="vn1" className={classes.img_lg}/>
            </div> */}
            { arrayDiv[index]}
            {/* {arrayDiv[3]} */}
        </div>
    )
}

export default Carousel;