import { GET_DATA_LIFE_STYLE } from "../actions";

const DataLifeStyle = (state=[], action)=>{
    switch(action.type){
        case GET_DATA_LIFE_STYLE:
            return state = action.data
        default: 
            return state
    }
}
export default DataLifeStyle;