import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from"../firebase";
import { collection, doc, getDoc } from 'firebase/firestore';

const Detail = (props) => {
    const {id} = useParams();
    const [detailData, setDetailData] = useState({});
    const [detailUrl, setDetailUrl] = useState();

    useEffect(() => {
        getDoc(doc(collection(db,'movies'),id))
            .then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                    localStorage.setItem('url', doc.data().trailer);
                    setDetailUrl(doc.data().trailer);
                } else {
                    console.log('no such document');
                }
            })
            .catch((error) => {
                console.log("Error getting documents", error);
            });
    }, [id]);

    console.log(detailUrl);



    const url = "https://youtu.be/xOsLIiBStEs";

    return (
    <Container>

        <Background>
            <img src={detailData.backgroundImg} alt={detailData.title} />
        </Background>

        <ImageTitle>
            <img src={detailData.titleImg} alt={detailData.title} />
        </ImageTitle>

        <ContentMeta>
            <SubTitle>{detailData.subTitle}</SubTitle>

            <Controls>
            <Player>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>             
            </Player>
            <Trailer>
              <Link to={`/player`}>
                <div>
                  {/* <img src="/images/play-icon-white.png" alt="" /> */}
                  <span>Trailer</span>
                </div>
              </Link>
            </Trailer>
            <AddList>
                <span />
                <span />
            </AddList>
            <GroupWatch>
                <Link to={'/collab/'}>
                  <div>
                    <img src="/images/group-icon.png" alt="" />
                  </div>
                </Link>
            </GroupWatch>
            </Controls>
            <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
    
    );
}; 


const Container = styled.div`
position: relative;
min-height: calc(100vh - 70px);
overflow-x: hidden;
display: block;
top: 70px;
padding:  0 calc(3.5vw + 5px);
box-shadow: 450px -30px 550px black inset;
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  right: 0px;
  
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    /* height: 30vw; */
    min-height: 170px;
    padding-top: 30px;
    padding-bottom: 20px;
    width: 100%;
    img {
        max-width: 341px;
        min-width: 100px;
        width: 35vw;
    }
`

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: #444;
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  text-align: left;
  margin-left: 0px;
  width:500px;
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  text-align: left;
  margin-left: 0px;
  line-height: 1.4;
  font-size: 18px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  width:500px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


export default Detail;