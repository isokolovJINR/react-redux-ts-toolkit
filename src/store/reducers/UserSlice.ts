import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./action-creators/User";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: null | string;
}

const initialState: UserState = {

    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {


    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.users = action.payload
            state.error = ''
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

    }
})

export default  userSlice.reducer;