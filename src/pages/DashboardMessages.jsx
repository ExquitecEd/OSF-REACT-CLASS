import { useEffect,  } from "react"
import { useOutletContext } from "react-router-dom"

export default function DashboardMessages() {
    const {activeLink} = useOutletContext()
    
    useEffect(() => {
        activeLink('messages')
    })
    return (
        <div>
            <h1>DashboardMessages</h1>
        </div>
    )
}
