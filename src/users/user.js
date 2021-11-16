import EditForm from "../form/newedit";
import {useState} from "react";

export default function User({item, delUser, refreshUser}) {
    let [editForm, setEditForm] = useState('')
    let oneClickDeleteUser = () => {
        delUser(item.id);
    }

    return (
        <div className={"user"}>
            <p>{item.userName}</p>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.email}</p>
            <p>{item.type}</p>
            {/*<button onClick={oneClickDeleteUser*/}
            {/*}>DELETE*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    setEditForm(<EditForm item={item} refreshUser={refreshUser}/>);*/}
            {/*}}>EDIT*/}
            {/*</button>*/}
            {/*<div>*/}
            {/*    {editForm}*/}
            {/*</div>*/}
        </div>
    )
}
