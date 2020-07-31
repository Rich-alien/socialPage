const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl:'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //     followed: false,
        //     name: 'Dmitry K.',
        //     location: {country: 'Belarus', city: 'Minsk'},
        //     status: 'I am so pretty'
        // },
        // {
        //     id: 2,
        //     photoUrl:'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //     followed: true,
        //     name: 'Dmitry Z.',
        //     location: {country: 'Belarus', city: 'Minsk'},
        //     status: 'I am so pretty'
        // },
        // {
        //     id: 3,
        //     photoUrl:'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //     followed: false,
        //     name: 'Dmitry A.',
        //     location: {country: 'Belarus', city: 'Minsk'},
        //     status: 'I am so pretty'
        // },
        // {
        //     id: 4,
        //     photoUrl:'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //     followed: false,
        //     name: 'Dmitry V.',
        //     location: {country: 'Belarus', city: 'Minsk'},
        //     status: 'I am so pretty'
        // },
        // {
        //     id: 5,
        //     photoUrl:'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //     followed: false,
        //     name: 'Dmitry N.',
        //     location: {country: 'Belarus', city: 'Minsk'},
        //     status: 'I am so pretty'
        // },
    ],

}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}// берем старых юзеров и дописываем к ним новых
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;