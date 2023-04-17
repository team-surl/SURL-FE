import React from "react";
import Main from "./components/main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Main></Main>
    </>
  );
}

export default App;
