import * as React from "react";
import DropDown from "../components/DropDown";

export default function SearchBar() {
  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search blog posts"
        name="s"
      />
      <button type="submit">Search</button>
      <DropDown />
    </form>
  );
}
