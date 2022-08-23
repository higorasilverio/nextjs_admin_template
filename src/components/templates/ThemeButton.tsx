import { MoonIcon, SunIcon } from "../icons";

type ThemeButtonProps = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeButton = ({ theme, toggleTheme }: ThemeButtonProps) => {
  return theme === "dark" ? (
    <div
      onClick={toggleTheme}
      className={`
        hidden
        sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8 p-2 rounded-full justify-start
        
      `}
    >
      <div
        className={`
        flex items-center justify-center
        bg-white text-yellow-600 w-6 h-6 rounded-full
      `}
      >
        <SunIcon size={4} />
      </div>
      <div
        className={`
        hidden lg:flex items-center ml-4 text-white
      `}
      >
        Light
      </div>
    </div>
  ) : (
    <div
      onClick={toggleTheme}
      className={`
        hidden
        sm:flex items-center cursor-pointer justify-end
        bg-gradient-to-r from-gray-500 to-gray-900
        w-14 lg:w-24 h-8 p-2 rounded-full
        
      `}
    >
      <div
        className={`
            hidden lg:flex items-center mr-4 text-white
          `}
      >
        Dark
      </div>
      <div
        className={`
        flex items-center justify-center
        bg-black text-white w-6 h-6 rounded-full
        `}
      >
        <MoonIcon size={4} />
      </div>
    </div>
  );
};

export default ThemeButton;
