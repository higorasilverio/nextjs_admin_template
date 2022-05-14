import Link from "next/link";
import { ReactNode } from "react";

type MenuItemProps = {
  icon: ReactNode;
  text: string;
  url?: string;
  onClick?: Function;
  className?: string;
};

const MenuItem = ({
  icon,
  text,
  url,
  onClick = () => {},
  className,
}: MenuItemProps) => {
  const renderedContent = (
    <a
      className={`flex flex-col justify-center 
      items-center h-20 w-full   
      ${className} dark:text-white`}
    >
      {icon}
      <span className="text-base font-normal">{text}</span>
    </a>
  );

  return (
    <li className={`text-gray-800 hover:bg-gray-100 dark:hover:bg-zinc-700`}>
      {url ? (
        <Link href={url}>{renderedContent}</Link>
      ) : (
        <div className="cursor-pointer" onClick={() => onClick()}>
          {renderedContent}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
