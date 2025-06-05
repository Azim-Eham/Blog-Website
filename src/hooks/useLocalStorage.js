import {useEffect, useState} from 'react';

/*
 A custom hook for managing state in local storage
*/

function useLocalStorage(key, initialValue){
    // Get stored value from localStorage
    const readValue = () =>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(error){
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue;
        }
    }

    // State to store our value
    const [storedValue, setStoredValue] = useState(readValue);

    
    //Return a wrapped version of useState's setter function that persists the new value to localStorage
    const setValue = (value) => {
        try{
            // Allow value to be a function so we have the same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to localStorage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            // Dispatch a custom event so other instances can update
            window.dispatchEvent(new Event('local-storage'));
        }catch(error){
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    };

    // Listen for changes to this localStorage key from other components
    useEffect(()=> {
        const handleStorageChange = () => {
            setStoredValue(readValue())
        };
            // this only works for other documents, not the current one
            window.addEventListener('storage', handleStorageChange);
            // this is a custom event, triggered in setValue
            window.addEventListener('local-storage', handleStorageChange);
            return () => {
                window.removeEventListener('storage', handleStorageChange);
                window.removeEventListener('local-storage', handleStorageChange);
            }
    }, [])
    return [storeedValue, setValue];
}



export default useLocalStorage;