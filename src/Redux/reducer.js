import { combineReducers } from "redux"

const initialAddState={
    result:0,
}
const addReducer=(state=initialAddState, action) =>{
    switch(action.type){
        case 'ADD':
            return{
            ...state,
            result:state.result+action.payload,
            }
            default:
                return state
    }
}
const initialSubState={
    result:0,
}
const subReducer=(state=initialSubState, action) =>{
    switch(action.type){
        case 'SUB':
            return{
                ...state,
                result:state.result-action.payload,
            }
            default:
                return state
    }
}
const initialMulState={
    result:1,
}
const mulReducer=(state=initialMulState, action) =>{
    switch(action.type){
        case 'MUL':
            return{
            ...state,
            result:state.result*action.payload,
            }
            default:
                return state
    }
}
const initialDivState={
    result:1,
}
const divReducer=(state=initialDivState, action) =>{
    switch(action.type){
        case 'DIV':
            return{
            ...state,
            result:state.result/action.payload,
            }
            default:
                return state
    }
}
const initialModState={
    result:1,
}
const modReducer=(state=initialModState, action) =>{
    switch(action.type){
        case 'MOD':
            return{
            ...state,
            result:state.result%action.payload,
            }
            default:
                return state
    }
}
const initialPowState={
    result:1,
}
const powReducer=(state=initialPowState, action) =>{
    switch(action.type){
        case 'POW':
            return{
            ...state,
            result:state.result**action.payload,
            }
            default:
                return state
    }
}

const rootReducer=combineReducers({
    add :addReducer,
    sub:subReducer,
    mul:mulReducer,
    div:divReducer,
    mod:modReducer,
    pow:powReducer,


})
export default rootReducer;