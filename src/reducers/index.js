import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber
    }
);

export default rootReducers;