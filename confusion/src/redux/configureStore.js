import { createStore } from "redux";   //this will create a new store in which we gonna configure our initialState
import { Reducer, initialState } from "./reducer";


export const ConfigureStore = () => {
    const store = createStore( //create store will take 2 para Reducer and Initialestae
    
    Reducer, // reducer
    initialState // our initialState

);
return store;
}


