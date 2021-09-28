import "./App.css";
import { colors } from "./commons";
import Home from "./modules/home/Home";

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.PRIMARY }}>
      <Home />
    </div>
  );
}

export default App;
