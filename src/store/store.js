import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./ProjectSlice";
const store = configureStore({
    reducer : {

        projectManager:ProjectSlice

    }
});

export default store;