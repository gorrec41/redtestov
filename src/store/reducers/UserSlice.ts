import {IUser} from '../../models/iUser'
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface  UserState {
    users:IUser[],
    isLoading:boolean,
    error:string
}

const initialState:UserState={
    users:[],
    isLoading:false,
    error:''
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        usersFetchung(state){
                state.isLoading=true;
        },
        usersFetchungSuccess(state,action:PayloadAction<IUser[]>){
            state.isLoading=false;
            state.error='';
            state.users= action.payload;
        },
        usersFetchungError(state,action:PayloadAction<string>){
            state.isLoading=false;
            state.error=action.payload;
        },
    }
})

export default userSlice.reducer;