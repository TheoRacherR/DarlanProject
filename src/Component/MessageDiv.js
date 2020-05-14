import React from 'react';
// import BlockDiv from './BlockDiv'

const MessageDiv = ({side, sender, text, timestamp}) => {

    const style = {
        float: {side},
        backgroundColor:'darkcyan',
        color:'black',
        width:'15vw',
        borderRadius:'.25em',
        margin:'2%',
        padding:'1%',
        // textAlign:{side},
        // itemAlign:{side},
    }

    return (
        <div style={style}>
            <p>{text}</p>      
            <h6 style={{color: '#E0E0E0', textAlign:{side}}}>{timestamp}</h6>
        </div>
    );
}

export default MessageDiv;