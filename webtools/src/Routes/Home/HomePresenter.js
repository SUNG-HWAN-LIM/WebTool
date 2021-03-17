import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

//stuff(HomePresenter)는 항상 load 되어야한다.(length 혹은 map에 의해 시작하면 작동을 안한다 왜냐하면 loader 되지 않았기 때문이다)
const HomePresenter = ({nowPlaying,  popular, upcoming, loading, error}) =>
 loading ? (
    <Loader />
 ):(
<Container>
{nowPlaying && nowPlaying.length > 0 &&(
<Section title= "Now Playing">
    {nowPlaying.map(movie =>(
         <span key ={movie.id}>{movie.title}</span>
         )
         )}
</Section>
  )}

{upcoming && upcoming.length > 0 &&(
<Section title= "upcoming Movies">
    {upcoming.map(movie =>(
         <span key ={movie.id}>{movie.title}</span>
    ))}
</Section>

  )}

{popular && popular.length > 0 &&(
<Section title= "popular Movies">
    {popular.map(movie =>(
    <span key ={movie.id}>{movie.title}</span>)
    )}
</Section>
  )}

</Container>

 );
HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };
  

export default HomePresenter