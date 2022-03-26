import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    catsList: [],
    tagsList: [],
    isError: false,
    isLoading: false,
  },
  reducers: {
    addCat: (state, action) => {
      state.catsList.push(action.payload);
    },
    editCat: (state, action) => {
      const { index, url } = action.payload;
      state.catsList[index] = url;
    },
    removeCat: (state, action) => {
      state.catsList.splice(action.payload, 1);
    },

    getTags: (state) => {
      state.isLoading = true;
    },
    getTagsSuccess: (state, action) => {
      state.tagsList = action.payload;
      state.isLoading = false;
    },
    getTagsFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  getTagsFailure,
  getTags,
  getTagsSuccess,
  addCat,
  editCat,
  removeCat,
} = catSlice.actions;

export default catSlice.reducer;
