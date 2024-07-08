import { createSlice } from "@reduxjs/toolkit";

export const FormSlice = createSlice({
  name: 'formdata',
  initialState: {
    FormDataArray: []
  },
  reducers: {
    addFormDataReducer: (state, action) => {
      state.FormDataArray.push(action.payload);
    },
    updateFormDataReducer: (state, action) => {
      const { index, updatedPost } = action.payload;
      state.FormDataArray[index] = updatedPost;
    },
    deleteFormDataReducer: (state, action) => {
      const indexToDelete = action.payload;
      state.FormDataArray.splice(indexToDelete, 1);
    }
  }
});

export const { addFormDataReducer, updateFormDataReducer, deleteFormDataReducer } = FormSlice.actions;

const FormDataArrayReducer = FormSlice.reducer;
export default FormDataArrayReducer;
