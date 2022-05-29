import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from "react-router-dom"
import Slider from "react-slick";

const ImgSlider = (props) =>{

    let settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
      <Carousel {...settings}>
      <Wrap>
          <Link to="/detail/4CuS1CRbeJ3D0aNLUlMb">
              <div id="only-murders"><img id="only-murders-logo" src="images/slider-only-murders-logo.png"/></div>
          </Link>
      </Wrap>
      <Wrap>
          <Link to="/detail/ntNGEIDBunJpwdHs0WPw">
              <div id="black-widow"><img id="black-widow-logo" src="images/slider-black-widow-logo.png"/></div>
          </Link>
      </Wrap>
      <Wrap>
          <Link to="/detail/zgVKSCiNYgWYyfvK6x4C">
              <div id="family-guy"><img id="family-guy-logo" src="images/slider-family-guy-logo.png"/></div>
          </Link>
      </Wrap>
      <Wrap>
          <Link to="/detail/FWOnaVsQogYSZ3orICOI">
              <div id="free-guy"><img id="free-guy-logo" src="images/slider-free-guy-logo.png"/></div>
          </Link>
      </Wrap>
      
      <Wrap>
          <Link to="/detail/teAiSWWzDZ4INIlkw3o6">
              <div id="just-beyond"><img id="just-beyond-logo" src="images/slider-just-beyond-logo.png"/></div>
          </Link>
      </Wrap>
      <Wrap>
          <Link to="/detail/Si3yMQrraTtcQWxL6SDQ">
              <div id="among"><img id="among-logo" src="images/slider-among-logo.png"/></div>
          </Link>
      </Wrap>
      <Wrap>
          <Link to="/detail/CrM9h9SNsJSftJjLbxtD">
              <div id="burrow"><img id="burrow-logo" src="images/burrow.png"/></div>
          </Link>
      </Wrap>
      <Wrap>
          <Link to="/movies/american-dad/XQNuEK75ak2DG633zz5J">
              <div id="onward"><img id="onward-logo" src="images/onward.webp"/></div>
          </Link>
      </Wrap>
      <Wrap>
          <Link to="/detail/htSt8SLUlgV6dgfwI1Pe">
              <div id="simpsons"><img id="simpsons-logo" src="images/slider-simpsons-logo.png"/></div>
          </Link>
      </Wrap>
      <Wrap>
          <Link to="/detail/8hQi7czzCl1A9hzEAMM0">
              <div id="star-wars"><img id="star-wars-logo" src="images/slider-star-wars-logo.png"/></div>
          </Link>
      </Wrap>
      <Wrap>
          <Link to="/detail/lziLmkq7CD2I5CjrEz1d">
              <div id="what-if"><img id="what-if-logo" src="images/slider-what-if-logo.png"/></div>
          </Link>
      </Wrap>
  </Carousel>
          
    )
}


const Carousel = styled(Slider)`
    margin-top: 20px;
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }
    ul li button {
        &:before {
            font-size: 10px;
            opacity: 1;
            color: rgb(150, 158, 171);
            @media (max-width: 768px) {
                display: none;
            }
        }
    }
    li.slick-active button:before {
        color: white;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .slick-slide {
        a{
            opacity: 0.5;
            transition: opacity 950ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
        }
        
        img {
            opacity: 0;
            transform: translateX(30px);
            transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
        }
    }
    .slick-active {
        a {
            z-index: 99;
            opacity: 1;
        }
        
        img {
            opacity: 1;
            transform: translateX(0px);
            transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms, opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
        }
    }
    .slick-list {
        overflow: initial;
    }
    .slick-prev {
        left: -5%;
    }
    .slick-next {
        right: -5%;
    }

`;



const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    padding: 0;
    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        margin: 10px;
        text-decoration: none;
        transition: all 150ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s !important;
        div {
            height: 0;
            width: 100%;
            background-position: right;
            background-size: cover;
            background-repeat: no-repeat;
            padding-top: 25.6%;
            border-radius: 4px;
            display: block;
            z-index: -1;
            &:hover {
            outline: 4px solid rgba(249, 249, 249, 0.8);
            outline-offset: -4px;
        }
        }
        img {
            inset: 0px;
            position: absolute;
            height: 100%;
        }
        #onward {
            background-image: url('images/slider-badag.jpg');
        }
        #onward-logo{
          width: 500px;
          height: 150px;
          display: flex;
          margin-top: 80px;
        }
        #among {
            background-image: url('images/slider-among.jfif');
        }
        #among-logo {
            padding: 5%;            
        }
        #black-widow {
            background-image: url('images/slider-black-widow.jfif');
        }
        #black-widow-logo {
            padding: 5%;
        }
        
        #family-guy {
            background-image: url('images/slider-family-guy.jfif');
        }
        #free-guy {
            background-image: url('images/slider-free-guy.jfif');
        }
        #just-beyond {
            background-image: url('images/slider-just-beyond.jfif');
        }
    
        #burrow {
            background-image: url('images/slider-badging.jpg');
        }

        #burrow-logo{
          width: 400px;
          height: 250px;
          display: flex;
          margin-top: 30px;
          margin-left: 30px;
        }
        #only-murders {
            background-image: url('images/slider-only-murders.jfif');
        }
        #only-murders-logo {
            padding: 5%;
        }
        #simpsons {
            background-image: url('images/slider-simpsons.jfif');
        }
        
        #star-wars {
            background-image: url('images/slider-star-wars.jfif');
        }
        #what-if {
            background-image: url('images/slider-what-if.jfif');
        }
        #what-if-logo {
            padding: 5%;
        }
    }
`


export default ImgSlider;