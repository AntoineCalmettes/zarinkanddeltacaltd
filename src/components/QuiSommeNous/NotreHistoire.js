import React, { useEffect, useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import palun from '../../assets/palun.png';
import logo from "../../assets/logo.png"
function NotreHistoire() {

    return (

        <div className="bg-black pt-5">
            <h1 className="text-center"><img className="logo" src={logo}/>Notre histoire<img className="logo" src={logo}/></h1>
            <Container>
            <Row>
                <Col>
                <img className="imgCol2 mt-5" rounded src={palun} ></img>
                </Col>
                <Col>
                <h3 className="mt-5">Le début d'une aventure</h3>
                <p>Aliquip magna anim ea excepteur est nulla non veniam cillum. Pariatur in ipsum ex dolore cillum. Aliqua dolor quis proident enim pariatur ea exercitation incididunt exercitation veniam reprehenderit eiusmod eiusmod. Et nisi mollit elit veniam id pariatur sint aliquip.

Do aute enim velit ad quis non. Aliqua elit dolore aliquip commodo ex in ullamco excepteur ut occaecat dolore dolore sunt reprehenderit. Veniam enim elit veniam amet incididunt irure et velit Lorem aute officia in aute nisi. Commodo velit exercitation duis veniam aliqua nulla adipisicing ipsum. Enim sit fugiat non ullamco sunt incididunt eiusmod officia non veniam velit ad.

Sit aute pariatur quis laboris quis in aute cupidatat esse mollit. Nulla aliqua pariatur esse aute cillum magna. Velit voluptate sint do veniam ipsum mollit eiusmod esse ex officia aliquip ad cillum. Dolor exercitation elit irure sunt esse ut occaecat proident nulla nisi sint tempor. Id mollit sit sint tempor nisi elit veniam id. Et reprehenderit veniam occaecat sit exercitation voluptate reprehenderit et reprehenderit pariatur.</p>
                </Col>
            </Row>
            </Container>

        </div>
    );

}

export default NotreHistoire;