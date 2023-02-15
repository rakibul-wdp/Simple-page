import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <SideNavbar />
        <div style={{margin: "1% 2% 0% 2%"}}>
          <Navbar />
          <Pages />
        </div>
      </Sidebar>
    </BrowserRouter>
  );
}

const Sidebar = styled.div`
  display: grid;
  grid-template-columns: 13% 87%;
`

export default App;
