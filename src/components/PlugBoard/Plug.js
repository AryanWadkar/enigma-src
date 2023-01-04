import { useState } from 'react';
import './plug.css'

function Plug({inupper,inlower}){
    const [upper,setupper] = useState(inupper);
    const [lower,setlower] = useState(inlower);
    const [outerst,setouter]=useState("outer");

    function upperhandler(e){
        if(lower===e.target.value || e.target.value==="")
        {
            setouter("error");
        }else if(lower!=="")
        {
            setouter("valid");
        }
        else{
            setouter("outer");
        }
        setupper(e.target.value);
    }

    function lowerhandler(e){
        if(upper===e.target.value || e.target.value==="")
        {
            setouter("error");
        }
        else if(upper!=="")
        {
            setouter("valid");
        }
        else{
            setouter("outer");
        }
        setlower(e.target.value);
    }

    return (
        <div className={outerst}>
            <input className="normal" defaultValue={upper || ""} onChange={upperhandler} maxLength="1" type="text"></input>
            <input className="normal" defaultValue={lower || ""} onChange={lowerhandler} maxLength="1" type="text"></input>
        </div>
    );
}

export default Plug;