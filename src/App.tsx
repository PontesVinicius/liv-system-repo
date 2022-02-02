import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import TabBar from './Components/TabBar';
import HeaderMenu from "./Components/MenuHeader";

// ROUTES
import Routes from './Routes';

function App() {

  return (
    <div style={{ display: 'flex' }}>
      <BrowserRouter>
        <HeaderMenu />
        <Routes />
        <TabBar />
      </BrowserRouter>
    </div>
  )
}

export default App
