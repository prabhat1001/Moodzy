import styled from 'styled-components';

const VideoJS = (props) => {
    return (
        <Container>
        <h4>VideoJS</h4>
        </Container>
    );
}

const Container = styled.div`
position: relative;
text-align: left;
min-height: calc(100vh - 70px);
overflow-x: hidden;
display: block;
top: 70px;
padding:  0 calc(3.5vw + 5px);
`;



export default VideoJS;
