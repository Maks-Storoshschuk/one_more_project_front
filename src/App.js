import Form from "./form/form";
import './App.css'

import {useState} from "react";
import Users from "./users/users";
// import LogInForm from "./form/logInForm";

export default function App() {
    let [currentUsers, setCurrentUsers] = useState([]);
    // let [authorized, setAuthorized] = useState([]);
    let[hide,setHide]= useState('form')


    return (
            <div className={'mainBlock'}>

                {/*{authorized.userName}*/}
                {/*<LogInForm authorized={setAuthorized}/>*/}
                <div id={'navigate'}>
                    <button onClick={()=>setHide('form')}>Create User</button>
                </div>
                <div className={'flex'}>
                    <Users currentUser={currentUsers}/>
                    <div className={hide}>
                        <Form setCurrentUsers={setCurrentUsers}/>
                        <button onClick={()=>setHide('hide')}>X</button>
                    </div>
                </div>
            </div>
    )
}
