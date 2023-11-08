import data from "../db.json";

import { DrumPad } from "./components/DrumPad.jsx";

function App() {
  return <DrumPad drums={data} />;
}

export default App;
