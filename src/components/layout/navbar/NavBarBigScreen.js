import "./NavBarBigScreen.scss";
import Logo from "../../../assets/img/Logo";
import IconUser from "../../../assets/img/IconUser";
import IconHamburger from "../../../assets/img/IconHamburger";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import IconClose from "../../../assets/img/IconClose";
import IconDown from "../../../assets/img/IconDown";

const linkTitlesLeft = ["Buy", "Rent", "Sell", "Home Loans", "Find an Agent"];
const linkTitlesRight = ["Manage Rentals", "Advertise", "Help", "Sign In"];

function NavBarBigScreen() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenuHandler = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="nav">
        <nav className="nav__container">
          <div className="nav__section nav__section--left">
            <div
              onClick={openMenuHandler}
              className="nav__user-icon--container"
            >
              {menuIsOpen ? (
                <IconClose className="nav__user-icon" />
              ) : (
                <IconHamburger className="nav__user-icon" />
              )}
            </div>
            <ul className="nav__group">
              {linkTitlesLeft.map((title) => {
                return (
                  <li>
                    <Link className="nav__link">{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav__section nav__section--center">
            <Logo />
          </div>
          <div className="nav__section nav__section--right">
            <div className="nav__user-icon--container">
              <IconUser className="nav__user-icon" />
            </div>
            <ul className="nav__group">
              {linkTitlesRight.map((title) => {
                return (
                  <li>
                    <Link className="nav__link">{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </nav>

      {menuIsOpen ? (
        <div className="nav__modal">
          <div className="nav__modal--top nav__modal--border">
            <div className="nav__section nav__section--left">
              <div
                onClick={openMenuHandler}
                className="nav__modal__user-icon--filled--container"
              >
                <IconClose className="nav__modal__user-icon--filled" />
              </div>
            </div>
            <div className="nav__section nav__section--center">
              <Logo />
            </div>
            <div className="nav__section nav__section--right">
              <div className="nav__modal__user-icon--filled--container">
                <IconUser className="nav__modal__user-icon--filled" />
              </div>
            </div>
          </div>
          <div className="nav__modal--bottom ">
            <ul className="nav__modal--links--container">
              {linkTitlesLeft.map((link) => {
                return (
                  <li className="nav__modal--border nav__modal--links">
                    <Link className="nav__modal--links--item">{link}</Link>
                    <div className="nav__modal--icon-down--container">
                      <IconDown className="nav__modal--icon-down" />
                    </div>
                  </li>
                );
              })}
              {linkTitlesRight.map((link) => {
                return (
                  <li className="nav__modal--border nav__modal--links">
                    <Link className="nav__modal--links--item">{link}</Link>
                    <div className="nav__modal--icon-down--container">
                      <IconDown className="nav__modal--icon-down" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default NavBarBigScreen;
