import {AppDispatch} from "../../store";
import axios from "axios";
import {IUser} from "../../../models/IUser";
import {userSlice} from "../UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching)
//         const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.usersFetchingSuccess(responce.data))
//     }
//     catch (e) {
//         dispatch(userSlice.actions.usersFetchingError('ERRRR'));
//     }
//
//
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
        const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        return responce.data;
            }
            catch (e) {
              return thunkAPI.rejectWithValue('ERRORS');
            }

    }
)