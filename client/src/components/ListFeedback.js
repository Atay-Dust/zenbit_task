import React, {Fragment, useEffect, useState} from "react";

const ListFeedback = () => {

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
        <Fragment>
            <table>
                <thead>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Message</th>
                    <th>Delete message</th>
                </thead>
                <tbody>
                    {messages.map(message => (
                        <tr key={message.mess_id}>
                            <td>{message.name}</td>
                            <td>{message.email}</td>
                            <td>{message.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListFeedback;