import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({title, info}) => {

    const [showInfo, setShowInfo] = useState(false);

    return ( 
        <Card className="mb-3 mt-4">
        <Card.Header as="h5"> 
        {title}   

        <Button variant="primary" onClick={() => setShowInfo(!showInfo)} style={{marginLeft:'10px'}}>
            { showInfo ?  <AiOutlineMinus /> : <AiOutlinePlus/> }
        </Button>

        </Card.Header>
        <Card.Body>
        { showInfo && (
            <Card.Text>
           {info}
            </Card.Text>
        ) }
        </Card.Body>
        </Card>
     );
}
 
export default Question;