import logo from "./logo.svg";
import "./App.css";
import Navbar from "./layout/Navbar";
import Slider from "./layout/Slider";
import ScrollView from "./layout/ScrollView";
import Categories from "./layout/Categories";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__container">
        <Slider />
        <Categories />
        <ScrollView />
      </div>
    </div>
  );
}

export default App;
