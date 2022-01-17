import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow}){
    if(show){
        return (
            <div>
                <p>Nastąpiły zmiany!</p>
                <button
                onClick={()=>toggleShow(false)}
                >
                Odśwież stronę
                </button>

            </div>
        )
    }else{
        return null
    }

}

const ChangeAlertWithStorageListener= withStorageListener(ChangeAlert);


export {ChangeAlertWithStorageListener}