import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import TabBar from './Components/TabBar';
import HeaderMenu from "./Components/MenuHeader";
import Header from "./Components/Header";

// ROUTES
import Routes from './Routes';

function App() {

  return (
    <div style={{ display: 'flex' }}>
      <BrowserRouter>
        <div style={{ flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <div className="header-div">
            <HeaderMenu />
            <Header />
          </div>
          <Routes />
        </div>
        <TabBar />
      </BrowserRouter>
    </div>
  )
}

export default App
