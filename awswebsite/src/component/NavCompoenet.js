import React from "react";

const NavComponent = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark flex-wrap navbar-pad">
      <a href="/" className="navbar-brand-custom" target={"_self"}>
        YUHO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar5"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbar5">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/resume" target={"_self"}>
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact" target={"_self"}>
              Contact
            </a>
          </li>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    台灣經濟發展歷史
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    夏威夷旅遊租借服務
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Todo List
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Photo Website
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MERN
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponent;
