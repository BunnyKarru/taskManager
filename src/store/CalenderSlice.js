import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    hoursworkrd : {},
    date:''
};
export const CalenderSlice = createSlice({
    name :"workManager",
    initialState,
    reducers : {
        add: (state,action)=>{
            const {date,hours} = action.payload;
            if (!state.hoursworkrd[date]) {

                state.hoursworkrd[date] = hours 
                
            } else {
                state.hoursworked[date] += hours;
            }
           
        },
        sendDate :(state,action)=>{
            state.date =action.payload;
        }
       
    }




})
export const{add,sendDate}=CalenderSlice.actions;
export default CalenderSlice.reducer ;