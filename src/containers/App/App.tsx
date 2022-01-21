import Home from "../../pages/Home";
import GlobalStyle from "../../styles/global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "../LoginContainer";
import RegisterContainer from "../RegisterContainer";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
