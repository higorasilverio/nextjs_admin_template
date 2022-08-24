import useAppData from "data/hooks/useAppData";
import ThemeButton from "./ThemeButton";
import Title from "./Title";
import UserAvatar from "./UserAvatar";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  const { theme, toggleTheme } = useAppData();
  return (
    <div className={`flex`}>
      <Title title={title} subtitle={subtitle} />
      <div
        className={`fixed bottom-3 right-3 sm:relative sm:flex sm:flex-grow sm:justify-end sm:items-center`}
      >
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        <UserAvatar styles="ml-3" />
      </div>
    </div>
  );
};

export default Header;
