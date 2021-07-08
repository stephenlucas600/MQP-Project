import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";

//import SearchBar from "../components/SearchBar";
//import ContactTable from "../components/table/ContactTable";


/**
 * The Home function defines the content that makes up the main content of the Home page
 *
 * This component is attached to the /about path in router.jsx
 * The function in app.jsx defines the page wrapper that this appears in along with the footer
 */

export default function Home() {
  return (
    <>
      <h1 className="title">Search</h1>
      <div className="SearchBar">
        {/* <SearchBar /> */}
      </div>
      <div className="navigation"></div>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the{" "}
          <Link href="/about">About</Link> page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div>
    </>
  );
}
