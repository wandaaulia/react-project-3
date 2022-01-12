import React, { useState} from 'react'
import data from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import Question from './Question'


export default function Home() {

    const [questions, setQuestions] = useState(data);


    return (
    <Card style={{ width: '50rem' }} className="mx-auto mt-5">
    <Card.Body>
        <Card.Title> Question and Answer </Card.Title>
        <Card.Text> 
        { questions.map((question) => {
                    return (
                    <Question key={question.id} {...question} /> 
                    ) 
                })}
     </Card.Text>
    </Card.Body>
    </Card>
    )
}
