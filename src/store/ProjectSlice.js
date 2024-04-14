import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    projects : [
       { id : "1",
       projectName : 'sample',}
    ],
    

};

export const ProjectSlice = createSlice({

    name : 'projectManager',
    initialState,
    reducers :{
        addProject : (state,action)=>{

            const project ={
                id : nanoid(),
                projectName:action.payload
            }
            state.projects.push(project)
            
        },
        removeProject :(state,action)=>{
            state.projects = state.projects.filter((project)=>project.id !== action.payload)
        },
    }



})

export const{addProject,removeProject}=ProjectSlice.actions;
export default ProjectSlice.reducer;