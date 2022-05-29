import styled from "styled-components";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import Footer from "./Footer";
import { useState } from "react";

const StarWar = (props) => {
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <Container>
                <Wrapper videoEnded={videoEnded}>
                    <video autoPlay={true} playsInline={true} loop={false} onEnded={() => setVideoEnded(true)}>
                        <source src="videos/star-wars-page.mp4" type="video/mp4"/>
                    </video>
                <Background videoEnded={videoEnded}>
                    <img src="/images/star-wars-page.jfif" />
                    <div></div>
                </Background>
                <ImageTitle>
                    <img src="/images/star-wars-logo.png" />
                </ImageTitle>
                <Recommends />
                <NewDisney />
                <Originals />
                <Trending />
                </Wrapper>
            <Footer />
        </Container>
    )
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
`

const Wrapper = styled.div`
    padding: 0 calc(3.5vw + 15px) 112px;

    video {
        opacity: ${props => props.videoEnded ? 0 : 1};
        position: fixed;
        inset: 0px 0px -1px;
        z-index: -1;
        width: 100%;
    }
`

const Background = styled.div`
    left: 0;
    opacity: 1;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
    img {
        opacity: ${props => props.videoEnded ? 1 : 0};
        width: 100%;
    }

    div {
        inset: 0px;
        position: absolute;
        background-image: linear-gradient(transparent, rgb(26, 29, 41));
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`

export default StarWar;