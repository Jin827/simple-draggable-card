import { ThemeProvider } from "styled-components";
import styled from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Draggable from './components/draggable';
import Footer from './footer';

const Wrapper = styled.div`
  display: inline-block;
  height: 100vh;
  width: 100vw;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper>
      <Draggable />
      <Footer />
    </Wrapper>
  </ThemeProvider>
);


export default App;
