import axios from 'axios';
import { CREATE_USER, GET_USER } from './types';



export const newUser = (user) => (dispatch) => {
    console.log('user inside of actiontypes', user);
    axios.post('/api/users', user)
        .then(res => dispatch({
            type: CREATE_USER,
            payload: res.data
        }));
        console.log('data sending to API', user);
}

export const getUser = () => (dispatch) => {
    axios.get('/api/users')
        .then(res => dispatch({
            type: GET_USER,
            payload: res.data
        }));
}