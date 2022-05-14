import {
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  NotificationsIcon,
  SettingsIcon,
} from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const SideMenu = () => {
  const sendMessage = () => {
    console.log("logout");
  };

  return (
    <aside className="flex flex-col dark:bg-zinc-800 h-full w-20 group hover:transition-all">
      <div
        className="flex flex-col items-center  
          justify-center h-20 w-20 
          bg-gradient-to-r from-zinc-500 via-zinc-800 to-zinc-800"
      >
        <Logo />
      </div>
      <ul className="flex-grow w-20 group-hover:hidden">
        <MenuItem text="Menu" icon={MenuIcon} className="h-20" />
      </ul>
      <div className="flex-grow hidden group-hover:block">
        <ul>
          <MenuItem url="/" text="Home" icon={HomeIcon} />
          <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
          <MenuItem url="/news" text="News" icon={NotificationsIcon} />
        </ul>
      </div>
      <ul>
        <MenuItem
          className="text-red-600 hover:bg-red-600 hover:text-white
            dark:text-red-600 dark:hover:bg-red-600 dark:hover:text-white hidden group-hover:flex"
          onClick={sendMessage}
          text="Log out"
          icon={LogOutIcon}
        />
      </ul>
    </aside>
  );
};

export default SideMenu;
