import EditForm from "../form/update";
import {useState} from "react";

export default function User({item, delUser, refreshUser, setStatus}) {
    let [editForm, setEditForm] = useState('')

    return (
        <div className={"user"} onClick={() => {
            setEditForm(<EditForm item={item} refreshUser={refreshUser} delUser={delUser} setStatus={setStatus}/>);
        }}>
            <p>{item.userName}</p>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.email}</p>
            <p>{item.type}</p>
            <div>
                {editForm}
            </div>
        </div>
    )
}
