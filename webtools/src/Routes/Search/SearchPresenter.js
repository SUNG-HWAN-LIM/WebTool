import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container =styled.div ` `;

const Form = styled.form`` ;

const Input =styled.form ``;





const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error
})=>( 

//handlesubmit은 searchTerm과 searchs들을 찾는다
//value를 가져야하는 이유 우린 우리의 input을 제어 할 수 있어야 한다
//value(값) 을 java script 로부터 얻고싶다. 
//서치 컨테이너에 state안에 searchTeam 이 있는 이유
<Container>
  <Form onSubmit= {handleSubmit}>  
 <Input placeholder = "Search Movies or TV Shows .." value={searchTerm}/> 
  </Form>
</Container>
);
SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;