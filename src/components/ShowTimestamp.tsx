import init, { greet } from '@rsw/rsw-hello'
import { useEffect } from 'react'

function ShowTimeStamp(props: { date: string }) {
    useEffect(() => {
        init()
    }, [])

    return <div onClick={() => greet('world')}>
        Current date is {props.date}.
    </div>
}

export default ShowTimeStamp