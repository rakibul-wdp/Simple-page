import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
