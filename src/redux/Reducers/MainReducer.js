import { createSlice } from "@reduxjs/toolkit";
import { saveToAsync } from "../../utils/Utils";

const initialState = {
  data: [],
};

export const MainReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
      saveToAsync(state.data);
    },
    DeleteUser: (state, action) => {
      state.data = state.data.filter((item) => item.id != action.payload);
      saveToAsync(state.data);
    },
    EditUser: (state, action) => {
      let index = state.data.findIndex((user) => user.id == action.payload.id);
      state.data.splice(index, 1, action.payload);
      saveToAsync(state.data);
    },
    addFromStorage: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addUser, DeleteUser, EditUser, addFromStorage } =
  MainReducer.actions;

export default MainReducer.reducer;
