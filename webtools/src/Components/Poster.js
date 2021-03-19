import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
font-size:12px;
`;

const Image = styled.div`
background-image:url(${props =>
`https://image.tmdb.org/t/p/w300${props.bgUrl}`});

height : 180px;
background-size:cover;
border-radius:4px;
background-position: center center;
transition : opacity 0.1s linear;
`;

const Rating = styled.span`
bottom:5px;
right:5px;
position:absolute;
opacity : 0;

`;
//hover 커서 이동시 그림자 효과 
const ImageContainer = styled.div`
margin-bottom:5px;
position : relative;
&:hover {
  ${Image} {
    opacity: 0.3;
  }
  
  ${Rating}{
    opacity:1;
  }
 
`;


const Title = styled.span`
dispaly:block;
margin-bottom:5px;
`;



const Year = styled.span`
font-size:10px;
color:rgba(255,255,255,0.5);
`;


//바깥쪽 image container 는 title 일거다

//Poster  는 일단 imageUrl 그리고 이름도 갖고 있고
const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl} />
       
        {/* <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/${imageUrl}`
              : require("../assets/noPosterSmall.png")
          }
        /> */}
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};
 //id 가 필요한 이유는 우리 user 에게 /아니면/IDpropTypes를 보내야 하기 때문이다  
export default Poster;