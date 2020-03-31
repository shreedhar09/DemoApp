import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getUserDataReducer } from "./Reducer";

function saveToLocalStorage(state){
  try{
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('state',serialisedState)
  }
  catch(e){
    console.log(e);
  }
  
}

function loadFromLocalStorage(){
  try{
    const serialisedState = localStorage.getItem('state')
    if(serialisedState === null) return undefined
    return JSON.parse(serialisedState)
    
  }
  catch(e){
    console.log(e);
    return undefined
  }
  
}




let rootReducer = combineReducers({
  UserData: getUserDataReducer
});

const serialisedState = loadFromLocalStorage()

export const reduxStore = createStore(rootReducer,serialisedState, applyMiddleware(thunk));

reduxStore.subscribe(()=>saveToLocalStorage(reduxStore.getState()))

//export default reduxStore;