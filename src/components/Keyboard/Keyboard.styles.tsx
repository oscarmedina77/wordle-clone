import styled from "styled-components";

const keyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  justify-content: center;

  button {
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    height: 6vh;
    margin: 0.5vh;
    border-radius: 4px;
    background-color: lightgray;
    cursor: pointer;
  }
`;

const keyboardRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const keyboardLetter = styled.div`
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 3vh;
  height: 6vh;
  width: 5vh;
  margin: 0.5vh;
  border-radius: 4px;
  background-color: lightgray;
  cursor: pointer;
`;

const styles = {
  keyboardContainer,
  keyboardLetter,
  keyboardRow,
};

export default styles;
