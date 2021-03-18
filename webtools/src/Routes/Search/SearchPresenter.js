import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

//컨테이너 스타일 생성
const Container = styled.div`
  padding: 0px 20px;
`;

//form 에서는 submit 이벤트를 차단
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

//form에서는 input도 가지고 있어야한다
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;
const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm
}) => (

  //handlesubmit은 searchTerm과 searchs들을 찾는다

//value를 가져야하는 이유 우린 우리의 input을 제어 할 수 있어야 한다

//value(값) 을 java script 로부터 얻고싶다. 

//서치 컨테이너에 state안에 searchTeam 이 있는 이유

//ENTER 를 누르면 Form 에 input 되어 사라진다 Enter 의 기본값은 submit 이다

// "onSubmit"은 리액트의 이벤트이기 때문에 리액트 혹은 자바스크립트는 나에게 이벤트를 준다
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />//loader 은 loading 이 멈췄을때 movieResults로 갈꺼고 length 의 길이가 0 이상이면 sectiomTitle로 가고
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <Poster 
              key ={movie.id}
              id={movie.id}
              title ={movie.original_title} 
              imageUrl = {movie.poster_path}
              rating={movie.vote_average}
              isMovie = {true}
              year={movie.release_date.substring(0,4)} 
                />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(show => (
               <Poster 
               key ={show.id}
               id={show.id}
               title ={show.original_title} 
               imageUrl = {show.poster_path}
               rating={show.vote_average}
               isshow = {true}
               year={show.file_air_date.substring(0,4)} 
                 />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults &&
         movieResults &&
         tvResults.length === 0 &&
         movieResults.length === 0 && (
           <Message text="Nothing found" color="#95a5a6" />
         )}
            </>
    )}
  </Container>
);
SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};
export default SearchPresenter;