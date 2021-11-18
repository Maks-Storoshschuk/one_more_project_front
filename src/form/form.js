import {useState} from "react";
import {createUser} from "../user.services/user.services";
import './form.css'

export default function Form({setCurrentUsers, setStatus}) {
    let [userName, setUserName] = useState([])
    let [firstName, setFirstName] = useState([])
    let [lastName, setLastName] = useState([])
    let [email, setEmail] = useState([])
    let [type, setType] = useState([])
    let [password, setPassword] = useState([])

    let onsubmitForm = (e) => {
        let newUser = {userName, firstName, lastName, email, type, password}
        createUser(newUser)
            .then(value => {
                setCurrentUsers(value);
                setStatus(value.status)
            })
        e.preventDefault()
    }

    const changeUserName = (e) => {
        if (e.target.value.length < 2) {
            setStatus({message: 'minimum 2 letters'})
        }
        if (e.target.value.length >= 2) {
            setStatus(0)
        }
        setUserName(e.target.value)
    }
    const changeFirstName = (e) => {
        if (e.target.value.length < 2) {
            setStatus({message: 'minimum 2 letters'})
        }
        if (e.target.value.length >= 2) {
            setStatus(0)
        }
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        if (e.target.value.length < 2) {
            setStatus({message: 'minimum 2 letters'})
        }
        if (e.target.value.length >= 2) {
            setStatus(0)
        }
        setLastName(e.target.value)
    }
    const changeEmail = (e) => {
        if (e.target.value.length < 8) {
            setStatus({message: 'email must contain "@" and ".'})
        }
        if (e.target.value.length > 8) {
            setStatus(0)
        }
        setEmail(e.target.value)
    }
    const changeType = (e) => {
        let role = ['driver', 'admin']
        if (!role.includes(e.target.value)) {
            setStatus({message: 'only "admin" or "driver"'})
        }
        if (role.includes(e.target.value)) {
            setStatus(0)
        }
        setType(e.target.value)
    }
    const changePassword = (e) => {
        if (e.target.value.length < 8) {
            setStatus({message: 'password mast contain min 8 letters includes min one number'})
        }
        if (e.target.value.length >= 8) {
            setStatus(0)
        }
        setPassword(e.target.value)
    }
    const repeatPassword = (e) => {
        if (password !== e.target.value) {
            setClas('error')
        }
        if (password === e.target.value) {
            setClas('button')
        }
    }
    let [clas, setClas] = useState('ok')
    let [hide, setHide] = useState('')

    return (
        <div className={hide}>
            <h2>Create new user</h2>
            <form onSubmit={onsubmitForm}>
                <p>Username*</p>
                <input type="text" name={'Username'} onInput={changeUserName}/>
                <p>First name*</p>
                <input type="text" name={'First name'} onInput={changeFirstName}/>
                <p>Last name*</p>
                <input type="text" name={'Last name'} onInput={changeLastName}/>
                <p>Email*</p>
                <input type="text" name={'Email'} onInput={changeEmail}/>
                <p>Type*</p>
                <input type="text" name={'Type'} onInput={changeType}/>
                <p>Password*</p>
                <input type="text" name={'Password'} onInput={changePassword}/>
                <p>Repeat password*</p>
                <input className={clas} type="text" name={'Password'} onInput={repeatPassword}/>
                <div>
                    <button className={clas} onClick={() => setHide('hide')}>Create</button>
                </div>
            </form>
        </div>
    )
}
