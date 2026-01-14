import { createContext, useState } from "react";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(
    JSON.parse(localStorage.getItem("city"))
  );

  const selectCity = (c) => {
    setCity(c);
    localStorage.setItem("city", JSON.stringify(c));
  };

  return (
    <CityContext.Provider value={{ city, selectCity }}>
      {children}
    </CityContext.Provider>
  );
};
