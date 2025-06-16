import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import config from '../config.js'
import { useNavigate } from "react-router-dom"

export default function DashboardHome() {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [message, setMessage] = useState('')

    const {activeLink} = useOutletContext()
    useEffect(() => {
        activeLink('dashboard')
    })

    const submit = async () => {

        if (title === '' || author === '' || message === ''){
            alert('Please fill in all fields')
            return
        }

        var res = await fetch(config.DashboardMessageUrl, {
            method: 'POST',
            body: JSON.stringify({title, author, message})
        })
        if (res.ok){
            setTitle('')
            setAuthor('')
            setMessage('')
            setTimeout(() => {
                navigate('/dashboard/messages')
            }, 1000)
        } else {
            console.log('FAILED: ',await res.text())
        }
    }


    return (
        <div>
            <h1>DashboardHome</h1>

            <section>
                <h2>create new Messages</h2>

                <input type="text" placeholder="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <input type="text" placeholder="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button onClick={submit}>create</button>
            </section>
        </div>
    )
}
