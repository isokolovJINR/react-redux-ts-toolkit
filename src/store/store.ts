import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from './reducers/UserSlice'
import {postAPI} from "../services/PostService";


const rootRedicer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer

})


export const setupStore =() => {
    return configureStore({
        reducer: rootRedicer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootRedicer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']