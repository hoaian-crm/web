import React from "react";
import styled from "styled-components";
import { Text } from "./text";
import ReactPaginate from "react-paginate";

export type PaginationProps = {
  total?: number;
  limit?: number;
  offset?: number;
  onChange?: (e: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  offset = 0,
  limit = 0,
  total = 0,
  onChange = (e) => {},
}) => {
  return (
    <Container>
      <PlaceHolder>
        {`Showing data ${offset + 1} to ${Math.min(
          offset + limit,
          total
        )} of ${total} records`}
      </PlaceHolder>
      <Controller
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => {
          onChange(e.selected);
        }}
        pageRangeDisplayed={5}
        pageCount={Math.floor(total / limit + Number(!!(total % limit)))}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName="active"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const PlaceHolder = styled(Text)`
  color: ${(props) => props.theme.placeHolder.color};
  margin-right: auto;
`;

const Controller = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  gap: 5px;
  font-family: "Poppins", sans-serif;

  li {
    a {
      background-color: ${(props) => props.theme.inActive.backgroundColor};
      color: ${(props) => props.theme.inActive.foregroundColor};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      cursor: pointer;
      user-select: none;
    }
    &.active {
      a {
        background-color: ${(props) => props.theme.active.backgroundColor};
        color: ${(props) => props.theme.active.foregroundColor};
      }
    }
  }
`;
