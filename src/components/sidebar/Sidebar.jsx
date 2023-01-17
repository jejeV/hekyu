import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav__list">

            <li className="nav__list">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__list">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i> </a>
            </li>

            <li className="nav__list">
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i> </a>
            </li>

            <li className="nav__list">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i> </a>
            </li>

            <li className="nav_list">
              <a href="#portofolio" className="nav__link">
                <i className="icon-layers"></i> </a>
            </li>

            <li className="nav__list">
              <a href="#blog" className="nav__link">
                <i className="icon-note"></i> </a>
            </li>

            <li className="nav__list">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i> </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">
          &copy; 2023 -2024. 
        </span>
      </div>
    </aside>
  )
}

export default Sidebar