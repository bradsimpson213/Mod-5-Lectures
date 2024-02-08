import { useState } from 'react'
import { useState, useEffect } from "react"

function TestComponent() {
    //const count = 0
    const [info, setInfo] = useState({})


    useEffect(() => {
        //count++
        setInfo({ users: [{ name: "Blue" }, { name: "Patch" }, { name: "Mimi" }] })
    }, [])

    const data = info.users.find((user) => user.name === "Blue")

    return (
        <div>
            <h1>{info.users[1].name}</h1>
        </div>

    )
}

export default App