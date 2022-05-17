import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Header from "./Layout/Header";
import Main from "./Layout/Main"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/layout" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
      <Header />
      <Main />
    </>
  );
}

export default App;
