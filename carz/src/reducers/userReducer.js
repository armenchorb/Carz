import { CREATE_USER } from '../actions/types';

const initialState = {
    currentUser: []
};

export default function(state = initialState, action) {

    switch(action.type) {
        case CREATE_USER:
            return {
                ...state,
                currentUser: [action.payload, ...state.currentUser]
        }
        default:   
            return state;
    }
}
