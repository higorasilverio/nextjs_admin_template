import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

// type Theme = "dark" | "";

type AppContextType = {
  theme?: string;
  toggleTheme?: () => void;
};

const AppContext = createContext<AppContextType>({});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("");

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
  }, []);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
