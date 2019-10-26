import React from 'react';
import '../css/stockdiv.css'

const stockdiv = props => {
    return(
        <div className='watchlistbxs'>
            <h2 className='watchlistWords'>
                {props.name}
            </h2>
        <div className={props.name} watchlistText>
            {props.children}
        </div>
            {props.children ? null: 
            <button
                className="watchlistbtn"
                onClick={props.handleclick}
                value={props.name}
            >
                whats is worth?
            </button>
            }

        </div>
    )
}

export default stockdiv;