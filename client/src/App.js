import logo from './logo.svg';
import "./styles/styles.css";

import SearchBar from "./components/SearchBar";

function App() {

	const { search } = window.location;
    const query = new URLSearchParams(search).get('s');

  return (
    <div className="App">
      <h1 className="title">Search</h1>
      <div className="SearchBar">
       <SearchBar />
      </div>
      <div className="navigation"></div>
      <view className="instructions">
        <h2>Using this project</h2>
        <p>Test Post output {query}</p>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the _ page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </view>
    </div>
  );
}

export default App;
