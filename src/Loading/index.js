import React from "react";
import "./Loading.css"

function Loading(){
    return(
        <div className="loader">
            <div className="dot dot-first"></div>
            <div className="dot dot-second"></div>
            <div className="dot dot-third"></div>
        </div>
    );

};

export {Loading}