import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../actions";
import { Loader } from "../../common/Loader";

class MovieDetailsContainer extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props
      .getMoviesDetails({ id: this.props.match.params.id })
      .then(response => {
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { movieDetails } = this.props;
    console.log(movieDetails);
    return (
      <MovieWrap>
        {this.state.loading ? (
          <LoaderWraper>
            <Loader color="#fff" />
          </LoaderWraper>
        ) : (
          <>
            <WrapperLeft>
              <MoviePoster src={movieDetails.Poster} alt="movie" />
            </WrapperLeft>
            <WrapperRight>
              <MovieTitle>{movieDetails.Title}</MovieTitle>
              <MovieSubTitle>{movieDetails.Genre}</MovieSubTitle>
              <p>{movieDetails.Plot}</p>
              <p>
                <span>Released date: </span> {movieDetails.Released}
              </p>
              <p>
                <span>Running time: </span> {movieDetails.Runtime}
              </p>
              <p>
                <span>director: </span> {movieDetails.Director}
              </p>
              <p>
                <span>cast: </span> {movieDetails.Actors}
              </p>
            </WrapperRight>
          </>
        )}
      </MovieWrap>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieDetails: state.movies.movie,
    fetchingMovie: state.movies.fetchingMovie
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsContainer);

const MovieWrap = styled.div`
  display: flex;
  /* flex-flow: row wrap; */
  background-color: #414142;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  border-radius: 3px;
`;
const WrapperLeft = styled.div`
  /* flex: 0 0 auto; */
`;
const WrapperRight = styled.div`
  /* flex: 1 1 auto; */
  padding-left: 1.5rem;
  color: #e2e2e2;
`;

const MoviePoster = styled.img`
  height: 30.5rem;
`;

const MovieTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
`;

const MovieSubTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0 2rem;
`;

const LoaderWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem;
`;
