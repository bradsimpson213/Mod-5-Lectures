import { useState, useEffect } from 'react'

export default function TestComponent() {
    console.log("rendered")
    const [info, setInfo] = useState({})


    useEffect(() => {
        //count++
        setInfo({ users: [{ name: "Blue" }, { name: "Patch" }, { name: "Mimi" }] })
    }, [])

    if(!Object.values(info).length) return null
    const data = info.users?.find((user) => user.name === "Blue")

    return (
        <div>
            <h1>Hi there</h1>
            <h1>{info.users[1].name}</h1>
        </div>

    )
}