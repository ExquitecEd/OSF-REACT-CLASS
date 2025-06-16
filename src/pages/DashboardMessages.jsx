import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import config from "../config"

export default function DashboardMessages() {
    const {activeLink} = useOutletContext()
    const [messages, setMessages] = useState([])
    const [selectedMessage, setSelectedMessage] = useState(null)
    
    useEffect(() => {
        activeLink('messages')
    })

    useEffect(() => {
        if (selectedMessage === null){
        (async ()=>{
            var res = await fetch(config.DashboardMessageUrl, { method: 'GET'})
            if (res.ok){
                setMessages(await res.json())
            } else {
                console.log('FAILED: ',await res.text())
            }
            })()
        }
    }, [selectedMessage])

    const deleteMessage = async (id) => {
        var res = await fetch(config.DashboardMessageUrl + '/' + id, {
            method: 'DELETE'
        })
        if (res.ok){
            setMessages(messages.filter(msg => msg.id !== id))
        } else {
            console.log('FAILED: ',await res.text())
        }
    }

    return (
        <div>
            <h1>DashboardMessages</h1>
            {messages.map((msg, index) => selectedMessage === msg.id ? <EditMessage msg={msg} setSelectedMessage={setSelectedMessage} /> :
            <div key={`dashboard-message-${index}`} style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
                <h3>{msg.title}</h3>
                <p>{msg.author}</p>
                <p>{msg.message ?? 'no message'}</p>
                <button onClick={() => deleteMessage(msg.id)}>delete</button>
                <button onClick={() => setSelectedMessage(msg.id)}>edit</button>
            </div>)}
        </div>
    )
}


export function EditMessage({ msg, setSelectedMessage }) {
    const [title, setTitle] = useState(msg.title)
    const [author, setAuthor] = useState(msg.author)
    const [message, setMessage] = useState(msg.message)

    const {activeLink} = useOutletContext()
    useEffect(() => {
        activeLink('dashboard')
    })

    const submit = async () => {

        if (title === '' || author === '' || message === ''){
            alert('Please fill in all fields')
            return
        }

        var res = await fetch(config.DashboardMessageUrl + '/' + msg.id, {
            method: 'PUT',
            body: JSON.stringify({title, author, message})
        })
        if (res.ok){
            setTitle('')
            setAuthor('')
            setMessage('')
            setTimeout(() => {
                setSelectedMessage(null)
            }, 1000)
        } else {
            console.log('FAILED: ',await res.text())
        }
    }


    return (
        <section style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h2>Edit Messages</h2>

            <input type="text" placeholder="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input type="text" placeholder="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={submit}>update</button>
        </section>
    )
}
