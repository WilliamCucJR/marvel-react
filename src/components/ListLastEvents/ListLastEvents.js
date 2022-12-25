import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";

export default function ListLastEvents() {

    const lastEventsFetch = useFetch('https://gateway.marvel.com/v1/public/events?ts=1&apikey=f004975e8e7d044444cf032071040ab4&hash=13c0cd7925286d0a8a4aac93e7a472c5&orderBy=startDate&limit=5');
  

    return(
        <div className="container-list-last-events">
            <Header size="large">Ultimos eventos</Header>

            <Container bg="light">
                <Card.Group itemsPerRow={5}>
                    <LastEvents lastEventsFetch={lastEventsFetch}/>
                </Card.Group>
            </Container>
        </div>
    )
};
