import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Col, Container,Row } from 'react-bootstrap';
function Information() {
    // Authentification
    const authBasic = {
        auth: {
            username: '0851c9b0c53049a8be33043b9e5fbe87',
            password: '67pjkndnL6cRiCIPUrWAS8abAiDlCHbt'
        }
    };
    var bearerToken = null;
    const urlBasicAuth = "https://eu.battle.net/oauth/token?grant_type=client_credentials";

    // Request information Guild
    const urlInfoGuild = "https://eu.api.blizzard.com/data/wow/guild/hyjal/zarink-and-deltaca-ltd?namespace=profile-eu&locale=fr_FR&access_token=";
    const [data, setData] = useState([]);

    const body = "";
    useEffect(() => {
        if (bearerToken === null) {
            axios.post(urlBasicAuth, body, authBasic)
                .then(res => {
                    bearerToken = res.data.access_token;
                    axios.get(urlInfoGuild+bearerToken).then(res =>{
                       setData(res.data);
                    }

                    )
                })
        }


    }, []);
    console.log(data);
    return (

        <div className="bg-black pt-5">
            <h2 className="text-center">Information Guilde</h2>
            <Container>
            <Row>
                <Col>
                <div className="text-center mt-5">
                <h3>Nombre de membres : {data.member_count}</h3> 
                <h3>Hauts faits : {data.achievement_points} </h3>
                </div>

                </Col>
            </Row>
            </Container>
        </div>
    );

}

export default Information;