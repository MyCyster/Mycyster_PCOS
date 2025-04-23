export default function UpdatePassword() {
  return (
    <form className="relative py-6">
      <p className="font-bold text-[#101928] text-base">Password</p>
      <p className="border-b border-[#E4E7EC] pb-4">
        Please enter your current password to change your password.
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between py-4 border-b border-[#E4E7EC] ">
        <label htmlFor="current_password" className="text-[#344054] text-base">
          Current Password
        </label>
        <input
          type="text"
          placeholder="Input your current password"
          className="px-3 py-2 h-12 borderborder-[#D0D5DD] text-base outline-none rounded-md"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between py-4 border-b border-[#E4E7EC]">
        <label htmlFor="new_password" className="text-[#344054] text-base">
          New Password
        </label>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Input new password"
            className="px-3 py-2 h-12 borderborder-[#D0D5DD] text-base outline-none rounded-md"
          />
          <span className="font-normal font-manrope text-[#667185] text-sm mt-1">
            Must be at least 8 characters
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between py-4 border-b border-[#E4E7EC]">
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
            className="px-3 py-2 h-12 borderborder-[#D0D5DD] text-base outline-none rounded-md"
          />
          <span className="font-normal font-manrope text-[#667185] text-sm mt-1">
            Must match new password
          </span>
        </div>
      </div>
      <div className="mb-12">
        <button className="absolute  mt-6  right-0 bg-[#057B7B] text-bold text-[#FFFFFF] text-base px-6 py-2 rounded-md font-manrope">
          Save changes
        </button>
      </div>
    </form>
  );
}
