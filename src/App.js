import logo from './logo.svg';
import "./styles/styles.css";

import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <h1 className="title">Search</h1>
      <div className="SearchBar">
       <SearchBar />
      </div>
      <div className="navigation"></div>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the{" "}
           page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div>
    </div>
  );
}

export default App;
