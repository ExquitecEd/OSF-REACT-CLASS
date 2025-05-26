import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export default function DashboardHome() {
    const {activeLink} = useOutletContext()
    useEffect(() => {
        activeLink('dashboard')
    })
    return (
        <div>
            <h1>DashboardHome</h1>
        </div>
    )
}
