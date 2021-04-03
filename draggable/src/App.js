import { ThemeProvider } from "styled-components";
import styled from 'styled-components';
import theme from './styles/theme';
import DraggableIndex from './components/index';
import Footer from './footer';

const Wrapper = styled.div`
  display: inline-block;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <DraggableIndex />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
