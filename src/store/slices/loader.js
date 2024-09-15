import { createSlice } from "@reduxjs/toolkit";

const load=createSlice({
    name:'load',
    initialState:{load:false},
    reducers:{
        changeload:(state,action)=>{
            state.load=action.payload
        }
    }
    
})

export default load.reducer
export const{changeload}=load.actions