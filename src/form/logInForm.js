import {useState} from "react";
import {logIn, logOut} from "../user.services/user.services";

export default function LogInForm({setAuthorized, setStatus}) {
    let [email, setEmail] = useState([])
    let [password, setPassword] = useState([])


    let onsubmitForm = (e) => {
        logIn({email, password})
            .then(value => {
                if (value.access_token) {
                    localStorage.setItem('access_token', value.access_token)
                    localStorage.setItem('refresh_token', value.refresh_token)
                    localStorage.setItem('id', value._id)
                    localStorage.setItem('name', value.userName)
                    setAuthorized(value)
                }
                setStatus(value)

                console.log(value)
            })
        e.preventDefault()
    }

    let logOutLocal = (e) => {
        logOut()
            .then(value => {
                localStorage.clear()
                setAuthorized({userName: "guest"})
            })
        // eslint-disable-next-line no-implied-eval
        setTimeout("location.reload();", 500)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    let hide = 'hide'
    let show = 'show'
    if (localStorage.getItem('name')) {
        show = 'hide'
        hide = 'show'
    }

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
