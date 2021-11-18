import {useState} from "react";
import './form.css'
import {deleteUser, getUsers} from "../user.services/user.services";


export default function EditForm({item, refreshUser, setStatus}) {
    let [userName, setUserName] = useState(item.userName)
    let [firstName, setFirstName] = useState(item.firstName)
    let [lastName, setLastName] = useState(item.lastName)
    let [type, setType] = useState(item.type)
    let [password, setPassword] = useState()
    let onsubmitForm = (e) => {
        e.preventDefault()
    }

    const changeUserName = (e) => {
        setUserName(e.target.value)
    }
    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        setLastName(e.target.value)
    }
    const changeType = (e) => {
        setType(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const repeatPassword = (e) => {
        if (password !== e.target.value) {
            setStatus(1)
        }
        if (password === e.target.value) {
            setStatus(0)
        }
    }

    let save = () => {
        refreshUser({userName, firstName, lastName, type, password, id: item.id})
    }


    let oneClickDeleteUser = () => {
        deleteUser(item.id).then(value => {
                setStatus({message: 'Deleted'});
                getUsers().then(value => {
                    refreshUser(...value);
                })
            }
        );
    }
    let [hide, setHide] = useState('updateForm')
    return (
        <div id={hide}>
            <h2>{item.firstName} {item.lastName}</h2>
            <form onSubmit={onsubmitForm}>
                <p>Username*</p>
                <input type="text" name={'Username'} defaultValue={item.userName} onInput={changeUserName}/>
                <p>First name*</p>
                <input type="text" name={'First name'} defaultValue={item.firstName} onInput={changeFirstName}/>
                <p>Last name*</p>
                <input type="text" name={'Last name'} defaultValue={item.lastName} onInput={changeLastName}/>
                <p>Type*</p>
                <input type="text" name={'Type'} defaultValue={item.type} onInput={changeType}/>
                <p>Password*</p>
                <input type="text" name={'Password'} onInput={changePassword}/>
                <p>Repeat password*</p>
                <input type="text" name={'Password'} onInput={repeatPassword}/>
                <div>
                    <button onClick={oneClickDeleteUser}>
                        Delete
                    </button>
                    <button onClick={save}>
                        Save
                    </button>
                </div>
            </form>
            <button onClick={() => {
                setHide('hide');
                setStatus(0)
            }}>X
            </button>
        </div>
    )
}
