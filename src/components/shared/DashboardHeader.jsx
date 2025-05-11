import { MdOutlineNotificationsNone } from "react-icons/md";
import SearchBar from "../dashboard/SearchBar";
import { useUser } from "../../hooks/useUser";
import Avatar from "./Avatar";

export const DashboardHeader = () => {
  const { data: user, isloading } = useUser();
  return (
    <section className="hidden lg:flex justify-end items-center  gap-x-10 mb-6 w-full border-b h-fit py-3">
      <div className="">
        <SearchBar />
      </div>
      <div>
        <MdOutlineNotificationsNone fill="#344054" size={25} />
      </div>
      <div className="flex  items-center gap-x-2 px-4">
        <Avatar src={user?.image_url} name={user?.name} size={40} />
        <p className="font-manrope font-normal  text-base text-[#000000]">
          {user?.name}
        </p>
      </div>
    </section>
  );
};
