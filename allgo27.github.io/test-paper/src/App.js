import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnOne from "./components/ColumnOne";
import ColumnTwo from "./components/ColumnTwo";

function App() {
  return (
    <div className="App">
      <div className="row">
        <ColumnOne />
        <ColumnTwo />
      </div>
      <div className="Flag">
        <div className="blue"></div>
        <div className="pink"></div>
        <div className="white"></div>
        <div className="pink"></div>
        <div className="blue"></div>
      </div>
    </div>
  );
}

export default App;
