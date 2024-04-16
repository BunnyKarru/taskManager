import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    { id: "1", projectName: "Sample", workHours: 0 },
  ],
};

export const ProjectSlice = createSlice({
  name: "projectManager",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const project = {
        id: nanoid(), // Consider alternative unique identifier strategy
        projectName: action.payload,
        
      };
      state.projects.push(project);
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
    addHours: (state, action) => {
      const { projectId, hours } = action.payload; // Destructure payload
      const projectIndex = state.projects.findIndex(
        (project) => project.id === projectId
      );

      // Check if project exists before updating
      if (projectIndex !== -1) {
        state.projects[projectIndex].workHours += hours;
      }
    },
  },
});

export const { addProject, removeProject ,addHours } = ProjectSlice.actions;
export default ProjectSlice.reducer;
