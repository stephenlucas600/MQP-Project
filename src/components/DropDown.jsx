import * as React from "react";
import { useState } from "react";

export default function DropDown() {
  const [theme, setTheme] = useState(null);

  const resetTheme = evt => {
    evt.preventDefault();
    setTheme(null);
  };

  const chooseTheme = (theme, evt) => {
    evt.preventDefault();
    setTheme(theme);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      <div className="btn-group">
        <button type="button">
          {theme || "Choose"} Theme
        </button>

        <button
          type="button"
          className={`btn btn-lg dropdown-toggle dropdown-toggle-split`}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle Theme Dropdown</span>
        </button>

        <div className="dropdown-menu">
          <a
            className="dropdown-item"
            href="#"
            onClick={e => this.chooseTheme("Primary", e)}
          >
            Primary Theme
          </a>
          <a
            className="dropdown-item"
            href="#"
            onClick={e => this.chooseTheme("Danger", e)}
          >
            Danger Theme
          </a>
          <a
            class="dropdown-item"
            href="#"
            onClick={e => this.chooseTheme("Success", e)}
          >
            Success Theme
          </a>

          <div className="dropdown-divider"></div>

          <a className="dropdown-item" href="#" onClick={resetTheme}>
            Default Theme
          </a>
        </div>
      </div>
    </div>
  );
}
