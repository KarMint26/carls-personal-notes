import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { GetTheme } from "../context/ThemeContext";
import Button from "./Button";

const NavigationBar = () => {
  const { switchThemeHandler, darkToggle } = GetTheme();

  return (
    <nav>
      <a className="nav-brand" href="#">
        NOTES
      </a>
      <div className="nav-item">
        <div className="dark-mode-toggle" onClick={switchThemeHandler}>
          {darkToggle ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </div>
        <Button
          className={"btn"}
          handlerClick={() => window.open("https://github.com/KarMint26")}
          iconBtn={<FaGithub />}
          contentBtn={"Follow"}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
