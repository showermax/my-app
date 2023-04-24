import {combineReducers, legacy_createStore as createStore} from "redux";
import {UsersReducer} from "../Reducers/UsersReducer";

const reducers = combineReducers({
    users: UsersReducer
}
)
export const store = createStore(reducers)

export type RootState=ReturnType<typeof reducers>