import {useState} from "react";
import {logIn, logOut} from "../user.services/user.services";

export default function LogInForm({setAuthorized}) {
    let [email, setEmail] = useState([])
    let [password, setPassword] = useState([])


    let onsubmitForm = (e) => {
        logIn({email, password})
            .then(value => {
                if (value.access_token) {
                    localStorage.setItem('access_token', value.access_token)
                    localStorage.setItem('refresh_token', value.access_token)
                    setAuthorized(value)
                }
            })
        e.preventDefault()
        setShow('hide')
        setHide('show');
    }

    let logOutLocal = (e) => {
        logOut().then(r => {
            setHide('hide');
            setShow('show')
        }).then(value => {
            localStorage.clear()
            setAuthorized({userName: "guest"})
        })
        e.preventDefault()
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    let [hide, setHide] = useState('hide')
    let [show, setShow] = useState('show')

    return (
        <div>
            <form id={show} onSubmit={onsubmitForm}>
                <div>
                    <input type="text" name={'Email'} placeholder={'email'} onInput={changeEmail}/>
                    <input type="text" name={'Password'} placeholder={'password'} onInput={changePassword}/>
                </div>
                <div>
                    <button>logIn</button>
                </div>
            </form>
            <button className={'baton'} id={hide} onClick={logOutLocal}>logOut</button>
        </div>
    )
}
