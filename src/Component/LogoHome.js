import React from 'react';


const LogoHome = ({logo,color}) => {

    const style= {
        fontSize:"100px",
        color:color,
        textAlign:"center",
        padding:"7%",
        paddingBottom:"2%",
        margin:"0"
    }

    return(
        <p style={style}>
            {logo}
        </p>
    );
}

export default LogoHome;