import React from 'react'

const BlockDiv = ({top,left,height,width,backgroundColor,position,margin,padding,borderRadius,alignItems,initiats,border,marginRight,color}) => {

    const style={
        backgroundColor:backgroundColor,
        height:height,
        width:width,
        top:top,
        left:left,
        position:position,
        margin:margin,
        padding:padding,
        borderRadius:borderRadius,
        alignItems:alignItems,
        border:border,
        marginRight:marginRight,
        color:color,
    }

    return(
        <div style={style}>
            {initiats}  
        </div>
    );
}

export default BlockDiv;