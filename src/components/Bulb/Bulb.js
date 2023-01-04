import './Bulb.css'
import {keyctx} from '../../context/Provider'
import { useContext, useEffect, useState } from 'react';
function Bulb(props){
    const [hl,chl] = useState('none');
    const currykey = useContext(keyctx);
    
    useEffect(()=> {
        console.log(currykey);
        if(currykey===props.children)
        {
            chl('active');
        }
        else if(hl!=='none'){
            chl('none');
        }
        // eslint-disable-next-line
    },[currykey]);

    return(
        <div className={`btn ${hl}`}> 
        {props.children}
        </div>
    );
}

export default Bulb;