import React from "react";
import styled from "styled-components";
import Bookmark, { BookmarkProps } from "components/atoms/Bookmark";

export interface BookmarkListProps {
  bookmarks: BookmarkProps[];
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80vw;
  max-height: 40vh;
  overflow: auto;
`;

const BookmarkList = ({ bookmarks }: BookmarkListProps) => (
  <ListContainer>
    {bookmarks.map(({ href, src }, i) => (
      <div key={i}>
        <Bookmark href={href} src={src} />
      </div>
    ))}
  </ListContainer>
);

export default BookmarkList;
