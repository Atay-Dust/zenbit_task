import React from "react";
import style from "../styles/styles.css"

const Home = () => {
    return (
        <section className={"main-section"}>
            <div className={"container"} >
                <h1>Home</h1>
                <div className={"feedbackLink"}>
                    <a href={'/feedback'} >Feedback</a>
                </div>
            </div>
        </section>

    );
};

export default Home;