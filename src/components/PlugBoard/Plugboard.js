import './plugboard.css'

function PlugBoard({hidefn},pbconfig){
    var initstate = 'normal';
    return(
        <div className="box">
            <button className="close" onClick={hidefn}>X</button>
            <h3>PLUGBOARD</h3>
            <div className='input-section'>
                <div className='top-row'>
                    <input className={initstate} maxLength="1" type="text"></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                </div>
                <div className='bottom-row'>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                    <input className={initstate}></input>
                </div>
            </div>
            <button className='save'>SAVE</button>
        </div>
    );
}

export default PlugBoard;