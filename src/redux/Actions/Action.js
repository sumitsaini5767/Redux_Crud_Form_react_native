import {
  DeleteUser,
  EditUser,
  addFromStorage,
  addUser,
} from "../Reducers/MainReducer";
import Store from "../Store";

export function addNewUser(userdata) {
  Store.dispatch(addUser(userdata));
}

export function deleteExisting(id) {
  Store.dispatch(DeleteUser(id));
}

export function editUser(item) {
  Store.dispatch(EditUser(item));
}

export function AccessLocalStorage(data) {
  Store.dispatch(addFromStorage(data));
}
