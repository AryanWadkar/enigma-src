import { Fragment} from "react";
import './Rotor.css'

function Rotor(props){
    function upclick(){
        props.rotormanager(props.rindex);
    }

    function downclick()
    {
        props.rotormanager(props.rindex*-1);
    }


    return(
        <Fragment>
            <div className="rotor">
                <div className="divider"></div>
                <p className="sel">{props.rotorstate+1}</p>
                <div className="divider"></div>
            </div>
            <div className="rotor-move">
                <div className="up" onClick={upclick}></div>
                <div className="down" onClick={downclick}></div>
            </div>
        </Fragment>
    );
}

export default Rotor;