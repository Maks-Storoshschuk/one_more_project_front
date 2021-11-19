let api = 'localhost:5000'

const createUser = (user) => {
    const {userName, firstName, lastName, email, type, password} = user;
    return (
        fetch(`http://${api}/users`, {
            method: 'POST',
            body: JSON.stringify({userName, firstName, lastName, email, type, password}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
    )
}

function getUsers() {
    return (
        fetch(`http://${api}/users`, {
            headers: {
                Authorization: localStorage.getItem('access_token').toString()
            },
        })
            .then(value => value.json())
    )
}

function deleteUser(id) {
    return (
        fetch(`http://${api}/users/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: localStorage.getItem('access_token')
            },
        })
    )
}

function updateUser(user) {
    const {userName, id, firstName, lastName, password, type} = user;
    return (
        fetch(`http://${api}/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({userName, firstName, lastName, password, type}),
            headers: {
                Authorization: localStorage.getItem('access_token'),
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(value => value.json())
    )
}


function logIn(email, password) {

    return (
        fetch(`http://${api}/auth`, {
            method: 'POST',
            body: JSON.stringify(email, password),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }

        })
            .then(response => response.json())
    )
}

function logOut() {
    return (
        fetch(`http://${api}/auth/logOut`, {
            method: 'POST',
            headers: {
                Authorization: localStorage.getItem('access_token')
            }
        })
    )
}

function refreshToken() {
    setTimeout(()=>{
        if (localStorage.getItem('refresh_token')){
            console.log(localStorage.getItem('refresh_token'))
            fetch(`http://${api}/auth/refresh/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: localStorage.getItem('refresh_token')
                }
            })
                .then(value => value.json())
                .then(response => {
                    if (response.access_token) {
                        localStorage.setItem('access_token', response.access_token)
                        localStorage.setItem('refresh_token', response.refresh_token)
                    }
                })
        }
    },1000*60*15)
}

export {createUser, updateUser, deleteUser, getUsers, logIn, logOut, refreshToken}
