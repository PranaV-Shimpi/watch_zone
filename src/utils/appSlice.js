// import {createSlice} from "@reduxjs/toolkit";

// const appSlice = createSlice({
//     name:"app",
//     initialState:{
//         open:true, 
//         video:[],
//         category:"All",
//         searchSuggestion:[],
//     },
//     reducers:{
//         // action
//         toggleSidebar:(state)=>{
//             state.open = !state.open;
//         },
//         setHomeVideo:(state,action)=>{
//             state.video = action.payload;
//         },
//         setCategory:(state,action)=>{
//             state.category = action.payload;
//         },
//         setSearchSuggestion:(state,action)=>{
//             state.searchSuggestion = action.payload;
//         }
         
//     } 
// });
// export const {toggleSidebar,setHomeVideo,setCategory,setSearchSuggestion} = appSlice.actions;
// export default appSlice.reducer;

// utils/appSlice.js

import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    video: [], // This holds all the videos fetched initially
    category: "All", // Default category
    searchSuggestion: [],
    selectedCategory: "All", // Newly added: to store currently selected category
    filteredVideos: [], // Newly added: to store filtered videos
  },
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchSuggestion: (state, action) => {
      state.searchSuggestion = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setFilteredVideos: (state, action) => {
      state.filteredVideos = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  setHomeVideo,
  setCategory,
  setSearchSuggestion,
  setSelectedCategory,
  setFilteredVideos,
} = appSlice.actions;

export default appSlice.reducer;
