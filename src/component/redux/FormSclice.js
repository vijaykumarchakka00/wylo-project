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
    }
  }
});

export const { addFormDataReducer, updateFormDataReducer } = FormSlice.actions;

const FormDataArrayReducer = FormSlice.reducer;
export default FormDataArrayReducer;
