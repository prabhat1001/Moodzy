import styled from 'styled-components';
import ReactPlayer from 'react-player';


const VideoJS = (props) => {
    const Url = localStorage.getItem('url');
    console.log(Url);

    return (
        <Container>
        <Player>
            <ReactPlayer 
                width={1370} 
                height={580} 
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
    overflow-x: hidden;
    overflow-y: hidden;
    display: block;
    top: 70px;
    /* height: 79.3; */
`;

const Player = styled.div`
/* position: absolute; */
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

`;


export default VideoJS;
