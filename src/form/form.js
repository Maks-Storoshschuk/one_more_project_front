import {useState} from "react";
import {createUser} from "../user.services/user.services";
import './form.css'

export default function Form({setCurrentUsers}) {
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
            })
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
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeType = (e) => {
        setType(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const repeatPassword = (e) => {
        if (password !== e.target.value){
            setClas('error')
        }
        if (password === e.target.value){
            setClas('ok')
        }
    }
    let [clas,setClas] = useState('ok')

    return (
        <div className={'form'}>
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
                <input type="text" name={'Type'}  onInput={changeType}/>
                <p>Password*</p>
                <input type="text" name={'Password'} onInput={changePassword}/>
                <p>Repeat password*</p>
                <input className={clas} type="text" name={'Password'} onInput={repeatPassword}/>
                <div>
                    <button>Create</button>
                </div>
            </form>
        </div>
    )
}
