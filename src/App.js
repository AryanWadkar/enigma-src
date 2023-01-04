import './App.css';
import Rotor from './components/Rotor/Rotor'
import RowA from './components/Keyboard/RowA';
import RowQ from './components/Keyboard/RowQ';
import RowZ from './components/Keyboard/RowZ';
import {keyctx,configctx} from './context/Provider'
import { Fragment, useContext, useState } from 'react';
import PlugBoard from './components/PlugBoard/Plugboard';
function App() {
  const [currkey,changekey] = useState("-");
  const [rotorstates,updaterotor] = useState({
    r1:0,
    r2:0,
    r3:0,
    n1:25,
    n2:25
  })
  const [overlay, switcholay] = useState(false);

  const rotorconfig = useContext(configctx);
  /*
  function getout(inval)
  {
    var p1 = rotorconfig.dictA[inval]+(rotorstates.r1%26===0?26:rotorstates.r1%26);
    var x1 = rotorconfig.dictn[(p1)%26===0?26:p1%26];
    var t1 = rotorconfig.c1[x1];
    var p2 = rotorconfig.dictA[t1]+(Math.abs(rotorstates.r2-rotorstates.r1)%26===0?26:Math.abs(rotorstates.r1-rotorstates.r2)%26);
    var x2 = rotorconfig.dictn[(p2)%26===0?26:p2%26];
    var t2 = rotorconfig.c2[x2];
    var p3 = rotorconfig.dictA[t2]+(Math.abs(rotorstates.r2-rotorstates.r3)%26===0?26:Math.abs(rotorstates.r2-rotorstates.r3)%26);
    var x3 = rotorconfig.dictn[(p3)%26===0?26:p3%26];
    var t3 = rotorconfig.c3[x3];
    var ref = rotorconfig.reflector[t3];
    var p4 = rotorconfig.dictA[ref]+(rotorstates.r3%26===0?26:rotorstates.r3%26);
    var x4 = rotorconfig.dictn[(p4)%26===0?26:p4%26];
    var t4 = rotorconfig.c33[x4];
    var p5 = rotorconfig.dictA[t4]+(Math.abs(rotorstates.r2-rotorstates.r3)%26===0?26:Math.abs(rotorstates.r2-rotorstates.r3)%26);
    var x5 = rotorconfig.dictn[(p5)%26===0?26:p5%26];
    var t5 = rotorconfig.c22[x5];
    var p6 = rotorconfig.dictA[t5]+(Math.abs(rotorstates.r2-rotorstates.r1)%26===0?26:Math.abs(rotorstates.r2-rotorstates.r1)%26);
    var x6 = rotorconfig.dictn[(p6)%26===0?26:p6%26];
    var out = rotorconfig.c11[x6];
    //console.log(inval+"=>"+t1+"->"+t2+"->"+t3+"->"+ref+"->"+t4+"->"+t5+"->"+out);
    //console.log(inval+"=>"+x1+"->"+t1+"->"+x2+"->"+t2+"->"+x3+"->"+t3+"->"+ref+"->"+x4+"->"+t4+"->"+x5+"->"+t5+"->"+x6+"->"+out);
    return out;
  }
  */

  function pb(inlet){
    if (rotorconfig.plugboard[inlet])
    {
      return rotorconfig.plugboard[inlet];
    }
    return inlet;
  }

  function enigmamech(inlet){
    const rcg  = rotorconfig;
    var pbin = pb(inlet);
    var r1 = rcg.dictn[(rcg.dictA[pbin]+rotorstates.r1)%26];
    var d1 = rcg.c1[r1];
    var r2 = rcg.dictn[(rcg.dictA[d1]+rotorstates.r2-rotorstates.r1+26)%26];
    var d2 = rcg.c2[r2];
    var r3 = rcg.dictn[(rcg.dictA[d2]+rotorstates.r3-rotorstates.r2+26)%26];
    var d3 = rcg.c3[r3];
    var refr = rcg.dictn[(rcg.dictA[d3]-rotorstates.r3+26)%26];
    var ref = rcg.reflector[refr];
    var r3o = rcg.dictn[(rcg.dictA[ref]+rotorstates.r3)%26];
    var d3o = rcg.c33[r3o];
    var r2o = rcg.dictn[(rcg.dictA[d3o]+rotorstates.r2-rotorstates.r3+26)%26];
    var d2o = rcg.c22[r2o];
    var r1o = rcg.dictn[(rcg.dictA[d2o]+rotorstates.r1-rotorstates.r2+26)%26];
    var d1o = rcg.c11[r1o];
    var r0o = rcg.dictn[(rcg.dictA[d1o]-rotorstates.r1+26)%26];
    var pbo = pb(r0o);
    var csl = `input:${inlet} pbin:${pbin} r1:${r1} d1:${d1} r2:${r2} d2:${d2} r3:${r3} d3:${d3} ref:${ref} r3:${r3o} d3:${d3o} r2:${r2o} d2:${d2o} r1:${r1o} d1:${d1o} r0:${r0o} pbo:${pbo}`
    console.log(csl)
    return pbo;
  }

  function pressHandler(e){
    var key = e.key;
    if(key.length===1)
    {
      changekey(enigmamech(key.toUpperCase()));
    }
  }
      
  function releaseHandler(){
  if(currkey!=="-")
  {
    changekey("-");
    handlerotors(1);
  }

  }

  function showpb(){
    
    switcholay(true);
  }

  function hidepb(){
    switcholay(false);
  }

function handlerotors(x){
  if(x===1)
  {
    updaterotor(prevstate=>{
      return(
        {
          r1:prevstate.r1===25?0:prevstate.r1+1,
          r2:prevstate.r1===prevstate.n1?(prevstate.r2===25?0:prevstate.r2+1):prevstate.r2,
          r3:prevstate.r2===prevstate.n2&&prevstate.r1===prevstate.n1?(prevstate.r3===25?0:prevstate.r3+1):prevstate.r3,
          n1:prevstate.n1,
          n2:prevstate.n2,
        }
      )
    })
}
  else if(x===2)
  {
    updaterotor(prevstate=>{
      return(
        {
          r1:prevstate.r1,
          r2:prevstate.r2===25?0:prevstate.r2+1,
          r3:prevstate.r2===25?prevstate.r3===25?0:prevstate.r3+1:prevstate.r3,
          n1:prevstate.n1,
          n2:prevstate.n2,
        }
      )
    })
  }
  else if(x===3){

    updaterotor(prevstate=>{
      return(
        {
          r1:prevstate.r1,
          r2:prevstate.r2,
          r3:prevstate.r3===25?0:prevstate.r3+1,
          n1:prevstate.n1,
          n2:prevstate.n2,
        }
      )
    })
  }
  else if(x===-1){
    updaterotor(prevstate=>{
      return(
        {
          r1:prevstate.r1===0?25:prevstate.r1-1,
          r2:prevstate.r2,
          r3:prevstate.r3,
          n1:prevstate.n1,
          n2:prevstate.n2,
        }
      )
    })
  }
  else if(x===-2){
    updaterotor(prevstate=>{
      return(
        {
          r1:prevstate.r1,
          r2:(prevstate.r2===0?25:prevstate.r2-1),
          r3:prevstate.r3,
          n1:prevstate.n1,
          n2:prevstate.n2,
        }
      )
    })
  }
  else if(x===-3){
    updaterotor(prevstate=>{
      return(
        {
          r1:prevstate.r1,
          r2:prevstate.r2,
          r3:prevstate.r3===0?25:prevstate.r3-1,
          n1:prevstate.n1,
          n2:prevstate.n2,
        }
      )
    })
  }
}

  return (
    <Fragment>
    {overlay && <div className='overlay'> <PlugBoard hidefn={hidepb} pbconfig={rotorconfig.plugboard}/></div>}
    <div className="App" onKeyDown={pressHandler} tabIndex={0} onKeyUp={releaseHandler}>
        <div className="row">
          <Rotor rotorstate={rotorstates.r3} rotormanager={handlerotors} rindex={3}/>
          <Rotor rotorstate={rotorstates.r2} rotormanager={handlerotors} rindex={2}/>
          <Rotor rotorstate={rotorstates.r1} rotormanager={handlerotors} rindex={1}/>
        <div className="sized-box-h"></div>
          <h1>ENIGMA</h1>
        </div>
        <div className="sized-box-v"></div>
        <keyctx.Provider value={currkey}>
        <div className="column">
          <RowQ></RowQ>
          <RowA></RowA>
          <RowZ></RowZ>
          <div className="pb" onClick={showpb}>PLUGBOARD</div>
        </div>
        </keyctx.Provider>
    </div>
    </Fragment>
  );
}

export default App;
