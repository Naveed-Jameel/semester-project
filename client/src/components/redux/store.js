import { createStore } from "redux";
import changeTheState from "./reducer";

const store = createStore(changeTheState);

export default store;
