import { combineReducers } from "redux";
import DataLifeStyle from "./dataLifeStyle";
import DarkMode from "./darkmode";

const rootReducer = combineReducers({
    darkmode: DarkMode,
    dataLifeStyle: DataLifeStyle,
})
  
export default rootReducer;