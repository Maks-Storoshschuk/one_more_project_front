import {useEffect, useState} from "react";
import {deleteUser, getUsers, updateUser} from "../user.services/user.services";
import User from "./user";
import './users.css'


export default function Users({currentUser}) {
    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value])
        })
    }, [currentUser]);

    let refreshUser = (item) => {
        updateUser(item)
            .then(value => {
                getUsers().then(value => {
                    setUsers([...value])
                })
            })
    }

    let delUser = (id) => {
        deleteUser(id).then(value => {
                if (value) console.log('Видалено!')
            }
        );
        let filterUser = users.filter(value => value.id !== id);
        setUsers([...filterUser])
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
                users.map(value => <User item={value} key={value.id} delUser={delUser} refreshUser={refreshUser}/>)
            }

        </div>
    )

}



