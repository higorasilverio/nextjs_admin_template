import { createContext, ReactNode, useCallback, useState } from "react";

type Theme = "dark" | "";

type AppContextType = {
  theme?: Theme;
  toggleTheme?: () => void;
};

const AppContext = createContext<AppContextType>({});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "" : "dark"));
  }, []);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
