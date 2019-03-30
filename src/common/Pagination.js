import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import _ from "lodash";

const Pagination = ({ totalItems, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(totalItems / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <React.Fragment>
      <nav aria-label="...">
        <PaginationWrap>
          {pages.map(page => (
            <li key={page}>
              <button onClick={() => onPageChange(page)}>{page}</button>
            </li>
          ))}
        </PaginationWrap>
      </nav>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;

const PaginationWrap = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;
