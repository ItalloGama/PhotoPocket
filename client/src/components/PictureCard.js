import { React, useState } from 'react'
import { Card, Modal } from "react-bootstrap";


function PictureCard () {
        const [modalShow, setModalShow] = useState(false);
    
    return(
        <Card className="bg-dark text-white" onClick={() => setModalShow(true)} >
            <Card.Img src="holder.js/100px270" alt="Card image" />
        </Card>
    )
}