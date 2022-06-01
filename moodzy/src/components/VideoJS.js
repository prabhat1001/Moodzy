import styled from 'styled-components';
import ReactPlayer from 'react-player';


const VideoJS = (props) => {
    const Url = localStorage.getItem('url');
    console.log(Url);

    return (
        <Container>
        <Player>
            <ReactPlayer 
                width="100%"
                height="90vh" 
                playing={true}
                controls url={Url}

                //callbacks
                onReady={() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('onPause callback')}
                onEnded={() => console.log('onEnded callback')}
                onError={() => console.log('onError callback')}  />

        </Player>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    /* min-width: 100vw; */
    overflow-x: hidden;
    overflow-y: hidden;
    display: block;
    background-color: #000;
    top: 70px;
    /* height: 79.3; */
`;

const Player = styled.div`
    position: absolute;
    object-fit: fill;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    min-width: 100%;

`;


export default VideoJS;
