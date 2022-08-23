import useAppData from "data/hooks/useAppData";
import ThemeButton from "./ThemeButton";
import Title from "./Title";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  const { theme, toggleTheme } = useAppData();
  return (
    <div className={`flex`}>
      <Title title={title} subtitle={subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Header;
