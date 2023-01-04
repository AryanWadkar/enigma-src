import './plugboard.css'
import Plug from'./Plug'

function PlugBoard({hidefn,pbconfig}){


        return(
        <div className="box">
            <button className="close" onClick={hidefn}>X</button>
            <h3>PLUGBOARD</h3>
            <div className='input-section'>
                {
                    pbconfig.map((e)=>{
                        return(<Plug inlower={Object.keys(e)} inupper={Object.values(e)}></Plug>)
                    })
                }
                {
                    
                }
            </div>
            <button className='save'>SAVE</button>
        </div>
    );
}

export default PlugBoard;