import Form from "./form/form";
import './App.css'

import {useState} from "react";
import Users from "./users/users";
import LogInForm from "./form/logInForm";

export default function App() {
    let [currentUsers, setCurrentUsers] = useState([]);
    let [authorized, setAuthorized] = useState([]);

    return (
            <div className={'mainBlock'}>
                {authorized.userName}
                <LogInForm authorized={setAuthorized}/>
                <div className={'flex'}>
                    <Users currentUser={currentUsers}/>
                    <Form setCurrentUsers={setCurrentUsers}/>
                </div>
            </div>
    )
}
