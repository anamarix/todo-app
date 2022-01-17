import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const[sincronized, setSincronized] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        console.log('effect1')
        setItem(parsedItem);
        setLoading(false);
        setSincronized(true);
        console.log('effect2')
      } catch(error) {
        setError(error);
      }
    }, 2000);
  },[sincronized]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const sincronizeItem = () =>{
    setLoading(true);
    setSincronized(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
}

export { useLocalStorage };