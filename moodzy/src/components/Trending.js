import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Originals = (props) =>{
    return(
        <Container>
            <h4>Trending</h4>
            <Content>
               <Wrap>
                   <Link to={'/'}>
                   <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&amp;aspectRatio=1.78&amp;format=jpeg" alt="A tail of two kitties"/>
                   </Link>
               </Wrap>
               <Wrap>
                   <Link to={'/'}>
                   <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&amp;aspectRatio=1.78&amp;format=jpeg&amp;label=originals" alt="Burrow"/>
                   </Link>
               </Wrap>
               <Wrap>
                   <Link to={'/'}>
                   <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&amp;aspectRatio=1.78&amp;format=jpeg&amp;label=originals" alt="Assembled"/>
                   </Link>
               </Wrap>
               <Wrap>
                   <Link to={'/'}>
                   <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&amp;aspectRatio=1.78&amp;format=jpeg" alt="Raya"/>
                   </Link>
               </Wrap>
            </Content>
        </Container>
    );
};


const Container = styled.div`
  padding: 0 0 26px;
  text-align: left;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  /* border: 3px solid rgba(249, 249, 249, 0.1); */
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Originals;