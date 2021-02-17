import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Survey() {
    const [form, setForm] = useState([]);
    const [questions, setQuestions] = useState(["question"]);

    function handleChange(e) {
        setForm({
            //name of input field: user input
            ...form,
            [e.target.name]: e.target.value,
        });
        console.log(typeof form);
    }

    function handleDelete(e) {
        console.log("you clicked delete: ", e);
        let index = e.target.previousSibling.name;
        let updatedQuestions = questions.filter(
            (question) => question.id != index
        );
        console.log("questions after filter: ", updatedQuestions);
        setQuestions(updatedQuestions);
        console.log("questions after delete: ", questions);
        //set a function on all questions with evt listener so can target and remove
        let newform = delete form[index];
        setForm(newform);
        console.log("from after delete: ", form);
    }

    function addQuestion() {
        console.log("new question to be added");
        console.log("from leng: ", questions[questions.length - 1]);
        // setQuestions([...questions, { id: questions.length }]);
        setQuestions([...questions, "question"]);
        console.log("q after add: ", questions);
    }

    useEffect(() => {
        // console.log("title is: ", form);
    }, [form, questions]);

    console.log("questions after delete 2: ", questions);

    return (
        <div>
            <h1>survey app</h1>
            <h3>
                To create your survey just add a title and add as many questions
                as you like. When you are ready hit the create button and your
                survey will be created. Please make sure to take not of the
                results link which will give you private access to the answers.
            </h3>

            <input
                type="text"
                name="title"
                placeholder="enter title here ..."
                onChange={(e) => handleChange(e)}
            />
            <input
                type="text"
                name="question"
                placeholder="enter question here ..."
                onChange={(e) => handleChange(e)}
            />
            <input
                type="text"
                name="question1"
                placeholder="enter question here ..."
                onChange={(e) => handleChange(e)}
            />
            {questions.map((question, index) => (
                <div key={index}>
                    <input
                        onChange={(e) => handleChange(e)}
                        name={index}
                        id={index}
                    />
                    <button onClick={(e) => handleDelete(e)}>delete</button>
                </div>
            ))}
            <button onClick={() => addQuestion()}>add new question</button>
        </div>
    );
}
