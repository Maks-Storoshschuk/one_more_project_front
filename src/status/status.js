import {useEffect, useState} from "react";

export default function Status(code) {
    let {status} = code
    let [statusBar, setStatus] = useState('okay')
    let [moving, setMoving] = useState('hide')

    useEffect(() => {
        if (status === 400) {
            setStatus('invalid data!')
            setMoving('error')
        }

        if (status === 401) {
            setStatus('Invalid token')
            setMoving('error')
        }

        if (status === 404) {
            setStatus('wrong email or password')
            setMoving('error')
        }

        if (status === 409) {
            setStatus('email already exist')
            setMoving('error')
        }

        if (status === 422) {
            setStatus('invalid email or password')
            setMoving('error')
        }

        if (status === 500) {
            setStatus('internal server error')
            setMoving('error')
        }

        if (status === 201) {
            setStatus('created!')
            setMoving('okay')
        }

        if (status === 202) {
            setStatus('saved!')
            setMoving('okay')
        }

        if (status === 290) {
            setStatus('CORS is not allowed')
            setMoving('error')
        }

        if (status === 0) {
            setMoving('hide')
        }

        if (status === 1) {
            setStatus('wrong repeat password')
            setMoving('error')
        }

        if (status.message) {
            setStatus(status.message)
            setMoving('error')
        }

        if (status.message === "Deleted") {
            setStatus(status.message)
            setMoving('okay')
        }

    }, [status]);
    return (
        <div>
            <div id={moving}>
                {statusBar}
            </div>
        </div>
    )

}
