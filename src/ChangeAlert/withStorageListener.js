import React from "react";

function withStorageListener(WrappedComponent){

    return function WrappedComponentWithStorageListener(props){
        const[storageChange, setStorageState] = React.useState(false);

        window.addEventListener('storage', (change)=>{
            if(change.key ==='TODOS_V1'){
                setStorageState(true);
            }
        });

        const toggleShow = ()=>{
            props.sincronize(); 
            setStorageState(false); 
        };
        
        return <WrappedComponent 
         show={storageChange}
         toggleShow={toggleShow}
         />

    }
}

export {withStorageListener};