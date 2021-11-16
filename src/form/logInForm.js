import {useState} from "react";
import {logIn} from "../user.services/user.services";

export default function LogInForm({authorized}){
    let [email,setEmail] = useState([])
    let [password,setPassword] = useState([])

    let onsubmitForm = (e)=>{
        logIn({email,password})
            .then(value => {
                authorized(value);
            })
        e.preventDefault()
    }

    const changeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const changePassword = (e)=>{
        setPassword(e.target.value)
    }

    return(
        <div>
            <form onSubmit={onsubmitForm}>
                <div >
                    <input type="text" name={'Email'} placeholder={'email'} onInput={changeEmail}/>
                    <input type="text" name={'Password'} placeholder={'password'} onInput={changePassword}/>
                </div>
                <div>
                    <button>logIn</button>
                </div>
            </form>
        </div>
    )
}
