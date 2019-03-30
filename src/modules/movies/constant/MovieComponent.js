import React from "react";
import styled from "styled-components";

const MovieComponent = ({ title, poster, id, history }) => {
  return (
    <MovieList>
      <MovieHeader>
        <img src={poster} alt="" />
      </MovieHeader>
      <MovieBody>
        <MovieTitle>{title}</MovieTitle>
        <MovieLink onClick={() => history.push(`/movies/${id}`)}>
          See Details
        </MovieLink>
      </MovieBody>
    </MovieList>
  );
};

export default MovieComponent;

const MovieList = styled.div`
  background-color: #fff;
  color: #333;
  padding: 1rem;
  border-radius: 0.3rem;
  position: relative;
`;

const MovieHeader = styled.div`
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }
`;

const MovieBody = styled.div`
  padding-top: 1rem;
`;

const MovieTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
`;

const MovieLink = styled.a`
  display: block;
`;
