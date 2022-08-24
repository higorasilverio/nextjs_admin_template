/* eslint-disable @next/next/no-img-element */
import useAuth from "data/hooks/useAuth";
import Link from "next/link";

const UserAvatar = ({ styles }: { styles: string }) => {
  const { user } = useAuth();

  return (
    <Link href="/profile" passHref>
      <img
        src={user?.imageUrl || "/images/avatar.svg"}
        alt="user avatar"
        className={`h-10 w-10 rounded-full cursor-pointer ${styles}`}
      />
    </Link>
  );
};
export default UserAvatar;
