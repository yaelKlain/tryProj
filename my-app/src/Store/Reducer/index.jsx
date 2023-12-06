import { combineReducers } from "redux";

import reducer from "./StudentUser";
const reducers = combineReducers({
    user:reducer
})

export default reducers;