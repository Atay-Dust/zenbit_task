import React, {useEffect, useState} from "react";

const Admin = () => {

    const [messages, setMessages] = useState([])

    const getMessages = async () => {
        try {
            const response = await fetch("http://localhost:7000/allfeedback")
            const jsonData = await response.json()

            setMessages(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() =>{
        getMessages();
    }, [])

    return (
        <div>
            <table>
                <thead>
                <th>id</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Message</th>
                </thead>
                <tbody>
                {messages.map(message => (
                    <tr key={message.mess_id}>
                        <td>{message.mess_id}</td>
                        <td>{message.name}</td>
                        <td>{message.email}</td>
                        <td>{message.text}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}


export default Admin;