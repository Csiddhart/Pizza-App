import {createSlice} from "@reduxjs/toolkit"

const FilterSlice = createSlice(
    {
        name:"filter",
        initialState:{
            filter:"All",//kano data fill a filter gulo string format a ache
        },
        reducers:{
            setFilter:(state,action)=>{
                state.filter=action.payload;//since eta array noye so push korteh hocche nah direct kaaj koro
            },
        },
    }
)

export const {setFilter} =FilterSlice.actions
export default FilterSlice.reducer;