import { useState, useEffect } from "react";

import { DrumPad } from "./components/DrumPad.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/songs", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <DrumPad drums={data} />;
}

export default App;
