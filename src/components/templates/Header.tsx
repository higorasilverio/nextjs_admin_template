import Title from "./Title";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div>
      <Title title={title} subtitle={subtitle} />
    </div>
  );
};

export default Header;
