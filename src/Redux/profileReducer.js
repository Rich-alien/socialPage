const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {id: 1, msg: 'Hi', likesCount: 23,},
        {id: 2, msg: 'Hello', likesCount: 23,},
        {id: 3, msg: 'wtf', likesCount: 23,},
        {id: 4, msg: 'who are u', likesCount: 23,},
        {id: 5, msg: 'Fuck u', likesCount: 23,},
    ],
    newPostText: '',
}
const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText:'',
                posts:[...state.posts,{id:state.posts.length+1, msg: state.newPostText, likesCount: 0, }]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newText,

            }
        }
        default:
            return state;
    }



}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text,
    }
}
export default profileReducer;