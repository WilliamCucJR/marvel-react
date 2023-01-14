import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";



export default function Comics() {

    const [renderComics, setRenderComics] = useState(10);

    const listComics = useFetch(
        `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=f004975e8e7d044444cf032071040ab4&hash=13c0cd7925286d0a8a4aac93e7a472c5&orderBy=focDate&limit=${renderComics}`
    );

    return(
        <div className="comics-page">
            <div id="slide-comics-image" />
            <Grid>
                <Grid.Column>
                    <Container bg="light">
                        <Header as="h1">Los mejores Cómics</Header>
                        <ListComics 
                            listComics={listComics} 
                            renderComics={renderComics}
                            setRenderComics={setRenderComics}
                        />
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    )
};
