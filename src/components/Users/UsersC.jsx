import React from "react";
import style from "./Users.module.css"
import * as axios from "axios";

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {
        return (
            <div className={style.container}>
                <button onClick={this.getUsers}>GetUSers</button>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.img}
                                 src={u.photos.small != null ? u.photos.small : require('../../assets/images/users.png')}
                                 alt={'img'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.ThatUnFollow(u.id)
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    this.props.ThatFollow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>u.location.country</div>
                            <div>u.location.city</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;