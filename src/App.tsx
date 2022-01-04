import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";

import Routes from './routes';
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";

import { DefaultTheme } from "styled-components";

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidebar toggleTheme={toggleTheme} />
          <Routes />
        </div>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;