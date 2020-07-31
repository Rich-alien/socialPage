import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        ThatFollow: (userId) => {
            dispatch(followAC(userId));
        },
        ThatUnFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;