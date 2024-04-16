import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./ProjectSlice";
import CalenderSlice from './CalenderSlice'

const store = configureStore({
    reducer : {

        projectManager:ProjectSlice,
        workManager:CalenderSlice
    }
});

export default store;