import {useEffect, useState} from "react";
import {getUsers, updateUser} from "../user.services/user.services";
import User from "./user";
import './users.css'


export default function Users({currentUser, setStatus, authorized}) {
    let [users, setUsers] = useState([])

    let token = localStorage.getItem('access_token')

    useEffect(() => {

        if (token) {
            getUsers().then(value =>
                setUsers([...value])
            )
        }
    }, [currentUser, authorized]);


    let refreshUser = (item) => {
        updateUser(item)
            .then(value => {
                setStatus(value)
                let {_id} = value
                if (_id) {
                    setStatus(202)
                }
                getUsers().then(value => {
                    setUsers([...value]);

                })
            })
    }

    return (
        <div className={'users'}>
            <div className={'usersHead'}>
                <h2>USERNAME</h2>
                <h2>FIRST NAME</h2>
                <h2>LAST NAME</h2>
                <h2>EMAIL</h2>
                <h2>TYPE</h2>
            </div>
            {
                users.map(value => <User item={value} key={value.id} refreshUser={refreshUser} setStatus={setStatus}/>)
            }

        </div>
    )

}



