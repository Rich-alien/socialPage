import React from "react";
import style from "./Users.module.css"

import * as axios from "axios";


const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
        // props.setUsers(
        //     [
        //         {
        //             id: 1,
        //             photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //             followed: false,
        //             name: 'Dmitry K.',
        //             location: {country: 'Belarus', city: 'Minsk'},
        //             status: 'I am so pretty'
        //         },
        //         {
        //             id: 2,
        //             photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //             followed: true,
        //             name: 'Dmitry Z.',
        //             location: {country: 'Belarus', city: 'Minsk'},
        //             status: 'I am so pretty'
        //         },
        //         {
        //             id: 3,
        //             photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //             followed: false,
        //             name: 'Dmitry A.',
        //             location: {country: 'Belarus', city: 'Minsk'},
        //             status: 'I am so pretty'
        //         },
        //         {
        //             id: 4,
        //             photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //             followed: false,
        //             name: 'Dmitry V.',
        //             location: {country: 'Belarus', city: 'Minsk'},
        //             status: 'I am so pretty'
        //         },
        //         {
        //             id: 5,
        //             photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //             followed: false,
        //             name: 'Dmitry N.',
        //             location: {country: 'Belarus', city: 'Minsk'},
        //             status: 'I am so pretty'
        //         },]
        // )
    }
    return (
        <div className={style.container}>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.img}
                                 src={u.photos.small != null ? u.photos.small : require('../../assets/images/users.png')}
                                 alt={'img'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.ThatUnFollow(u.id)
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    props.ThatFollow(u.id)
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
export default Users