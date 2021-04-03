import { ThemeProvider } from "styled-components";
import theme from './styles/theme';
import DraggableIndex from './components/index';
import Footer from './footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DraggableIndex />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
