import Report from "../components/profile/Report";
import UpdatePassword from "../components/profile/UpdatePassword";
import { useUser } from "../hooks/useUser";

export const Profile = () => {
  const { data: user, isloading } = useUser();
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-x-6">
      <div className="w-full lg:w-[65%]">
        <p className="text-[#000000] font-bold text-xl">Your profile</p>
        <p className="text-[#000000] font-normal text-lg font-inter">
          Edit your profile details here
        </p>
        <section className="bg-[#F9FAFB] border border-[#F0F2F5] rounded-md py-6 px-6 ">
          <div className="flex items-end gap-x-3">
            <img
              className="bg-gray-400 rounded-full"
              src={user?.image_url}
              width={100}
              height={100}
              alt="profile_image"
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
            <div className="flex flex-col lg:flex-row lg:justify-between py-4 border-b border-[#E4E7EC]">
              <label htmlFor="full_name" className="text-[#344054] text-base">
                Full Name
              </label>
              <p className=" px-3 py-2 h-12 border  border-[#D0D5DD] text-base outline-none rounded-md">
                {user?.name}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between py-4 border-b border-[#E4E7EC]">
              <label htmlFor="email" className="text-[#344054] text-base">
                Email address
              </label>
              <p className="px-3 py-2 h-12 border w-[50%] border-[#D0D5DD] text-base outline-none rounded-md">
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
