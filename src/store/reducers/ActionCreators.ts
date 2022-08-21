import {AppDispatch} from '../store'
import axios from 'axios';
import {IUser} from '../../models/iUser';
import {userSlice} from './UserSlice';
// @ts-ignore
export const fetchUsers =()=> async (dispatchE:AppDispatch)=>{
    try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    }catch (e){

    }
}