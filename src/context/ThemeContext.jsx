import React from "react";

const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [darkToggle, setDarkToggle] = React.useState(true);

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkToggle(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkToggle(false);
    }

    localStorage.theme = "light";

    localStorage.theme = "dark";

    localStorage.removeItem("theme");
  }, []);

  const switchThemeHandler = () => {
    darkToggle
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
    setDarkToggle((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ switchThemeHandler, darkToggle }}>
      <div className={`theme-container ${darkToggle ? "dark" : "light"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const GetTheme = () => {
  return React.useContext(ThemeContext);
};
