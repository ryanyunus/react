/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [likes, setlikes] = useState(0);

  function handleClick() {
    setlikes(likes + 1);
  }
  return (
    <div>
      <Header />
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default App;
