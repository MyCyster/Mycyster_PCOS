import Report from "../components/profile/Report";
import UpdatePassword from "../components/profile/UpdatePassword";
import Avatar from "../components/shared/Avatar";
import { useUser } from "../hooks/useUser";
import { useState } from "react";
export const Profile = () => {
  const { data: user, isloading } = useUser();
  const [selectedImage, setSelectedImage] = useState(null);
  const getInitial = (name) => name?.charAt(0).toUpperCase() || "?";
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-x-6">
      <div className="w-full lg:w-[65%]">
        <p className="text-[#000000] font-bold text-xl">Your profile</p>
        <button className="text-[#000000] font-normal text-lg font-inter">
          Edit your profile details here
        </button>
        <section className="bg-[#F9FAFB] border border-[#F0F2F5] rounded-md py-6 px-6 ">
          <div className="flex items-center lg:items-end gap-x-3">
            <Avatar
              src={user?.image_url}
              name={user?.name}
              size={100}
              textSize="text-xl"
            />
            <div className="space-y-3">
              <p className="font-bold text-[#101928] text-xl">
                Hi, {user?.name}
              </p>
              <button className="bg-[#069494] text-[#FFFFFF] font-semibold font-manrope text-sm px-2 py-2 border-[#069494] border rounded-lg ">
                Edit Profile Picture
              </button>
            </div>
          </div>
          <form className="mt-6">
            <div className="grid grid-cols-1 gap-y-3 lg:gap-y-0  lg:grid-cols-2   py-4 border-b border-[#E4E7EC]">
              <label
                htmlFor="full_name"
                className="text-[#101928] text-base font-manrope font-medium"
              >
                Full Name
              </label>
              <p className=" px-3 py-2 h-12 border  bg-[#FFFFFF] border-[#D0D5DD] text-base outline-none rounded-md">
                {user?.name}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-y-3 lg:gap-y-0  lg:grid-cols-2   py-4 border-b border-[#E4E7EC]">
              <label
                htmlFor="email"
                className="text-[#101928] text-base font-manrope font-medium"
              >
                Email address
              </label>
              <p className="px-3 py-2 h-12 border  bg-[#FFFFFF] border-[#D0D5DD] text-base outline-none rounded-md">
                {user?.email}
              </p>
            </div>
          </form>
          <UpdatePassword />
        </section>
      </div>
      <>
        <Report />
      </>
    </div>
  );
};
