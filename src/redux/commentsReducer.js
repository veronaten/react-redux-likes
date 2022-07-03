import { COMMENT_CREATE } from "./types";

const initialState = {
    comments: []
}

const commentsReducer = (state = initialState, action) => {
    console.log('comments Reducer >>', action);

    switch(action.type) {
        case COMMENT_CREATE:
            return {
                ...state, 
                comments: [...state.comments, action.data]
            }
        default: return state
    }
}

export default commentsReducer;