import { GlobalStyle } from "./styles/global";

import Routes from './routes';
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Routes />
      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;