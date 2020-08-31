import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from '../atoms/Heading/Heading';
import Button from '../atoms/Button/Button';
import Paragraph from '../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 10px;
  width: 250px;
  height: 300px;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  text-align: center;
`;

const StyledCollectionImage = styled.div``;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Collection = ({ title, cardsNum, cards, removeCollection }) => (
  <StyledWrapper>
    <div>
      <Heading>{title}</Heading>
      <Paragraph>{cardsNum} Cards</Paragraph>
    </div>
    <StyledCollectionImage />
    <StyledButtonsContainer>
      <Link
        to={{
          pathname: '/practice',
          state: { cards, title },
        }}
      >
        <Button icon="play" />
      </Link>
      <Link to="/editor">
        <Button icon="edit" />
      </Link>
      <Button icon="delete" removeCollection={() => removeCollection(title)} />
    </StyledButtonsContainer>
  </StyledWrapper>
);

Collection.propTypes = {
  title: PropTypes.string.isRequired,
  cardsNum: PropTypes.number.isRequired,
  cards: PropTypes.instanceOf(Array).isRequired,
  removeCollection: PropTypes.func.isRequired,
};

export default Collection;