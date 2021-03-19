import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding:  20px;
  `;

//stuff(HomePresenter)는 항상 load 되어야한다.(length 혹은 map에 의해 시작하면 작동을 안한다 왜냐하면 loader 되지 않았기 때문이다)
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster 
            key ={movie.id}
            id={movie.id}
            title ={movie.original_title} 
            imageUrl = {movie.poster_path}
            rating={movie.vote_average}
            isMovie = {true}
            year={movie.release_date.substring(0,4)} 
              />
            //이렇게 사용하는 이유는 substring 을 사용했을때 이것이 null 이되는경우 error가 sybstring은 function 이 아니다
            //undefined는 sybstring을 가지고 있지 않아서 오류가나는데 그래서 substring은 release_date이 존재할 때만 사용하도록
          
            ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map(movie => (
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
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => (
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
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};
export default HomePresenter;