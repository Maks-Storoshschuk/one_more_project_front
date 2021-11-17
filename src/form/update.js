import {useState} from "react";
import './form.css'
import {deleteUser} from "../user.services/user.services";


export default function EditForm({item, refreshUser}) {
    let [userName, setUserName] = useState([])
    let [firstName, setFirstName] = useState([])
    let [lastName, setLastName] = useState([])
    let [type, setType] = useState([])
    let [password, setPassword] = useState([])

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
    let save = () => {
        refreshUser({userName, firstName, lastName, type, password, id: item.id})
    }


    let oneClickDeleteUser = () => {
        deleteUser(item.id).then(value => {
                if (value) console.log('Видалено!')
            }
        );
    }
    let[hide,setHide]= useState('updateForm')
    return (
        <div id={hide}>
            <h2>{item.firstName} {item.lastName}</h2>
            <form>
                <p>Username*</p>
                <input type="text" name={'Username'} placeholder={item.userName} onInput={changeUserName}/>
                <p>First name*</p>
                <input type="text" name={'First name'} placeholder={item.firstName} onInput={changeFirstName}/>
                <p>Last name*</p>
                <input type="text" name={'Last name'} placeholder={item.lastName} onInput={changeLastName}/>
                <p>Type*</p>
                <input type="text" name={'Type'} placeholder={item.type} onInput={changeType}/>
                <p>Password*</p>
                <input type="text" name={'Password'} placeholder={'new password'} onInput={changePassword}/>
                <p>Repeat password*</p>
                <input type="text" name={'Password'} placeholder={'new password'} onInput={changePassword}/>
                <div>
                    <button onClick={oneClickDeleteUser}>
                        Delete
                    </button>
                    <button onClick={save}>
                        Save
                    </button>
                </div>
            </form>
            <button onClick={()=>setHide('hide')}>X</button>
        </div>
    )
}
