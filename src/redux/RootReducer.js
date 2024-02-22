import { combineSlices } from "@reduxjs/toolkit";
import MainReducer from "./Reducers/MainReducer";

export const RootReducer = combineSlices(MainReducer);
