import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const MainReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    DeleteUser: (state, action) => {
      state.data = state.data.filter((item) => item.id != action.payload);
    },
    EditUser: (state, action) => {
      let index = state.data.findIndex((user) => user.id == action.payload.id);
      state.data.splice(index, 1, action.payload);
    },
  },
});

export const { addUser, DeleteUser, EditUser } = MainReducer.actions;

export default MainReducer.reducer;
