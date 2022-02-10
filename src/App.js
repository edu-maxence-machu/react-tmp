import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import headerStyle from "./components/Header/SHeader.module.css";
function App() {
  return (
    <div className="App">
      <Header />

      <h1 className={headerStyle.Header}>TEST H1</h1>

      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
