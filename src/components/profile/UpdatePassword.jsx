export default function UpdatePassword() {
  return (
    <form className="relative py-6">
      <p className="font-bold text-[#101928] text-base">Password</p>
      <p className="mt-3 lg:mt-0 border-b border-[#E4E7EC] pb-4">
        Please enter your current password to change your password.
      </p>
      <div className="grid grid-cols-1 gap-y-3 lg:gap-y-0 lg:grid-cols-2   py-4 border-b border-[#E4E7EC]">
        <label htmlFor="current_password" className="text-[#344054] text-base">
          Current Password
        </label>
        <input
          type="text"
          placeholder="Input your current password"
          className="px-3 py-2 h-12 border  bg-[#FFFFFF] border-[#D0D5DD]  text-base outline-none rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 gap-y-3 lg:gap-y-0  lg:grid-cols-2   py-4 border-b border-[#E4E7EC]">
        <label htmlFor="new_password" className="text-[#344054] text-base">
          New Password
        </label>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Input new password"
            className="px-3 py-2 h-12 border  bg-[#FFFFFF] border-[#D0D5DD] text-base outline-none rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-3 lg:gap-y-0  lg:grid-cols-2   py-4 border-b border-[#E4E7EC]">
        <label
          htmlFor="Confirm_new_password"
          className="text-[#344054] text-base"
        >
          Confirm New Password
        </label>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Confirm new password"
            className="px-3 py-2 h-12 border  bg-[#FFFFFF] border-[#D0D5DD] text-base outline-none rounded-md"
          />
        </div>
      </div>
      <div className="mb-12">
        <button className="absolute  mt-6  lg:right-0 bg-[#057B7B] text-bold text-[#FFFFFF] text-base px-6 py-2 rounded-md font-manrope">
          Save changes
        </button>
      </div>
    </form>
  );
}
