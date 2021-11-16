import {useState} from "react";


export default function EditForm({item,refreshUser}){
    let [userName,setUserName] = useState([])
    let [firstName,setFirstName] = useState([])
    let [lastName,setLastName] = useState([])
    let [type,setType] = useState([])
    let [password,setPassword] = useState([])

    let onsubmitForm = (e)=>{
        e.preventDefault()
    }
    const changeUserName = (e)=>{
        setUserName(e.target.value)
    }
    const changeFirstName = (e)=>{
        setFirstName(e.target.value)
    }
    const changeLastName = (e)=>{
        setLastName(e.target.value)
    }
    const changeType = (e)=>{
        setType(e.target.value)
    }
    const changePassword = (e)=>{
        setPassword(e.target.value)
    }
    let ref=()=>{
        refreshUser({userName,firstName,lastName,type,password,id:item.id})
    }
    return(
        <div>
            <form onSubmit={onsubmitForm}>
                <div>
                    <input type="text" name={'Username'} placeholder={item.userName} onInput={changeUserName}/>
                    <input type="text" name={'First name'} placeholder={item.firstName} onInput={changeFirstName}/>
                    <input type="text" name={'Last name'} placeholder={item.lastName} onInput={changeLastName}/>
                    <input type="text" name={'Type'} placeholder={item.type} onInput={changeType}/>
                    <input type="text" name={'Password'} placeholder={item.password} onInput={changePassword}/>
                </div>
                <div>
                    <button onClick={ref}>
                        CONFIRM
                    </button>
                </div>
            </form>
        </div>
    )
}
