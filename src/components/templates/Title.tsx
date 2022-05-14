type TitleProps = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div>
      <h1
        className="font-black text-4xl text-zinc-900
        dark:text-zinc-100"
      >
        {title}
      </h1>
      <h2 className="font-normal text-lg text-zinc-700 dark:text-zinc-300">
        {subtitle}
      </h2>
    </div>
  );
};

export default Title;
