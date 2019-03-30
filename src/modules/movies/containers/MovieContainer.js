import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import * as actions from "../actions";
import MovieComponent from "../constant/MovieComponent";

class MovieContainer extends Component {
  state = {
    pageSize: 2,
    page: 1,
    isLoaded: false,
    movies: [],
    totalMovies: 0
  };

  componentDidMount() {
    this.props.getMovies({ searchTerm: "home", page: 1 }).then(response => {
      console.log(response);
      this.setState({
        movies: response.data.Search,
        totalMovies: response.data.totalResults
      });
    });
  }

  handlePageChange = page => {
    this.setState({ page }, () => {
      this.props
        .getMovies({ searchTerm: "home", page: this.state.page })
        .then(response => {
          this.setState({
            movies: response.data.Search
          });
        });
    });
  };

  render() {
    const { movies, totalMovies, page } = this.state;
    console.log(this.props);
    return (
      <React.Fragment>
        <MovieWrap>
          {movies.map(movie => (
            <MovieComponent
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              type={movie.Type}
              year={movie.Year}
              id={movie.imdbID}
              {...this.props}
            />
          ))}
        </MovieWrap>
        <PaginationWrap>
          <Pagination
            prevPageText="prev"
            nextPageText="next"
            firstPageText="first"
            lastPageText="last"
            hideDisabled
            disabledClass="disabled"
            activePage={page}
            // itemsCountPerPage={12}
            totalItemsCount={totalMovies}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </PaginationWrap>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(MovieContainer);

const MovieWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  max-width: 30.2rem;
  margin: auto;
  padding-top: 8rem;
  padding-bottom: 4rem;

  @media screen and (min-width: 450px) {
    max-width: 40rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    max-width: 70rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1199px) {
    max-width: 120rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PaginationWrap = styled.div`
  max-width: 120rem;
  display: flex;
  justify-content: center;
  padding-bottom: 8rem;
`;
