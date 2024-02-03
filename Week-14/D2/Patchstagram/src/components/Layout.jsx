import { Outlet } from 'react-router-dom'

export default function Layout () {

    return (
        <div>
            <nav>
                <h2>Nav Links Here</h2>
            </nav>
            <Outlet />
        </div>
    )
}