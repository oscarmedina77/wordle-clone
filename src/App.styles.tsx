import styled from "styled-components";

const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  nav {
    width: 100%;
    border-bottom: 2px solid lightgray;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  #correct {
    background-color: #528d4e;
    color: white;
  }

  #almost {
    background-color: #b49f39;
    color: white;
  }

  #error {
    background-color: #3a393c;
    color: white;
  }

  #disabled {
    background-color: #3a393c;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 3vh;
    height: 6vh;
    width: 5vh;
    /* margin: 0.5vh; */
    border-radius: 4px;
  }
`;

const styles = {
  App,
};

export default styles;
