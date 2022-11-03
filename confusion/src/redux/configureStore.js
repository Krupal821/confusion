import { createStore, combineReducers } from "redux";   //this will create a new store in which we gonna configure our initialState
import { Dishes } from './dishes';
import { Promotions  } from "./promotions";
import { Leaders } from "./leaders";
import { Comments } from "./comments";


export const ConfigureStore = () => {
    const store = createStore( //create store will take 2 para Reducer and Initialestae
    
    combineReducers({
        dishes: Dishes,
        promotions: Promotions,
        leaders: Leaders,
        comments: Comments

    })

);
return store;
}


