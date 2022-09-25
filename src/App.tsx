import React from 'react';
import {Container} from "./components/Container";
import styled from "styled-components";

function App() {
  return (
      <Body>
          <Container>
              <header className="App-header">
                  <p>
                      Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
              </header>
          </Container>
      </Body>

  );
}

export default App;

const Body = styled.div`
  background-color: antiquewhite;
`;


