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
  }

  #almost {
    background-color: #b49f39;
  }

  #error {
    background-color: #3a393c;
  }
`;

const styles = {
  App,
};

export default styles;
