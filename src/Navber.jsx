import React from "react";

const Navber = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <p>web</p>
        </div>
        <div className="child-2">
          <ul>
            <li>home</li>
            <li>portfolio </li>
            <li>skills</li>
            <li>about me</li>
          </ul>
        </div>
        <div className="child-3">
          <div className="icon">
            <i class="ri-menu-line"></i>{" "}
          </div>
          <div className="btn">
            <p>contact me</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
