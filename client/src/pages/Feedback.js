import React, {useState} from "react";
import style from "../styles/styles.css"
import inst from "../assets/in-icon.svg"
import fc from "../assets/fc-icon.svg"
import twt from "../assets/twt-icon.svg"
import pin from "../assets/p-icon.svg"

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try{
            const body = {name, email, text};
            const response = await fetch('http://localhost:7000/feedback',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            return onSubmitForm;
        } catch (err) {
            console.error(err.message())
        }
    }


    return (
        <div>
            <section className={"main-section"}>
                <div className={"container feedback"} >
                    <div className={"feedbackBox"}>
                        <h2>Reach out to us!</h2>
                        <form onSubmit={onSubmitForm}>
                            <textarea className={"firstInput"} type="text" value={name} onChange={event => setName(event.target.value)} placeholder={'Your name*'} />
                            <textarea className={"firstInput"} type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder={'Your e-mail*'}/>
                            <textarea className={"secondInput"} type="text" value={text} onChange={event => setText(event.target.value)} placeholder={'Your message*'}/>
                            <button onClick={() => alert("Message send!!!")}>Send message</button>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <div className={"container"}>
                    <div className={"footer"}>
                        <a href="#">
                            <img src={inst} alt="instagram"/>
                        </a>
                        <a href="#">
                            <img src={twt} alt="twitter"/>
                        </a>
                        <a href="#">
                            <img src={fc} alt="facebook"/>
                        </a>
                        <a href="#">
                            <img src={pin} alt="pinterest"/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>



    );
};

export default Feedback;