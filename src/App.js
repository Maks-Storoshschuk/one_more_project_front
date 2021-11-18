import Form from "./form/form";
import './App.css'

import {useState} from "react";
import Users from "./users/users";
import Status from "./status/status";
import LogInForm from "./form/logInForm";

export default function App() {
    let [currentUsers, setCurrentUsers] = useState([]);
    let [authorized, setAuthorized] = useState('');
    let [hide, setHide] = useState('form')
    let [status, setStatus] = useState('')

    return (
        <div className={'mainBlock'}>
            <div id={'navigate'}>
                <Status status={status}/>
                <button onClick={() => {
                    setHide('form');
                    setStatus(0)
                }}>Create User
                </button>
            </div>
            <div className={'flex'}>
                <Users currentUser={currentUsers} setStatus={setStatus} authorized={authorized}/>
                <div className={hide}>
                    <Form setCurrentUsers={setCurrentUsers} setStatus={setStatus}/>
                    <button onClick={() => {
                        setHide('hide');
                        setStatus(0)
                    }}>X
                    </button>
                </div>
            </div>
            <LogInForm setAuthorized={setAuthorized}/>
            <h2 id={'user'}>{authorized.userName}</h2>
        </div>
    )
}
