import axios from 'axios';

// export const FETCH_POSTS = 'fetch_posts';
export const CREATE_USER = 'create_user';
const ROOT_URL = ''

// export function fetchPosts(){
//     const request = axios.get('');
//     return {
//         type:FETCH_POSTS,
//         payload: request
//     };
// }

export function createUser(values){
    // Send request to our API with axios
    // return action which contains request as payload
    const request = axios.post(`api/process`, values)
    return{
        type:CREATE_USER,
        payload: request
    }
}