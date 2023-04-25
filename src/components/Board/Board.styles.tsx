import styled from "styled-components";

const boardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

const guessRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const styles = {
  boardContainer,
  guessRow,
};

export default styles;
