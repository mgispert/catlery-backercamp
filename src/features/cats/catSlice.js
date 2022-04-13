import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    catsList: [],
    tagsList: [],
    isError: false,
    isLoading: false,
    errorMessage: null,
    data: [],
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
    getTagsFailure: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
      state.isError = true;
    },
    getCat: (state) => {
      state.isLoading = true;
    },
    getCatSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.data = [...state.data, payload];
    },
    getCatFailure: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
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
  getCat,
  getCatSuccess,
  getCatFailure,
} = catSlice.actions;

export default catSlice.reducer;
