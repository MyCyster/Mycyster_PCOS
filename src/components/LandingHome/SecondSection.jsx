
export const SecondSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-6 sm:py-14 my-16 sm:my-20">
      <div className="px-6 sm:px-[2rem] lg:px-[5rem] block md:flex items-center gap-[2em] xl:gap-[10rem]">
      {/* Left Text Content */}
      <div className="md:w-[55%]">
        <h2 className="text-[21px] md:text-[25px] font-bold text-[#12141D]">
          Feeling Overwhelmed by PCOS?
        </h2>
        <p className="mt-4 text-gray-700 leading-9 vlg:text-[24px] xxl:text-[20px] text-18px">
          Living with PCOS can feel like navigating a maze of conflicting information, frustrating symptoms, and emotional ups and downs. <span className="text-[#DD2590] font-medium">You’re not alone.</span>
        </p>
        <p className="text-gray-700 leading-9 vlg:text-[24px] xxl:text-[20px] text-18px">
          Many women struggle to find reliable resources, affordable treatments, and a supportive community that truly understands their experience. PCOS can impact everything from your fertility and hormone balance to your mental well-being and self-confidence. The lack of accessible, localized support in Nigeria makes this journey even more challenging.
        </p>
      </div>

      {/* Right Stats & Call-to-Action Box */}
      <div className="md:w-[45%] flex flex-col gap-4 mt-6 md:mt-0">
        <div className="flex gap-4">
          {/* Stat Box 1 */}
          <div className="bg-[#069494] text-white rounded-lg p-4 md:p-6 w-1/2">
            <p className="text-[24px] font-bold">75%</p>
            <p className="text-sm">
              of women with PCOS report feeling isolated and lacking support.
            </p>
          </div>

          {/* Stat Box 2 */}
          <div className="bg-[#069494] text-white rounded-lg p-4 md:p-6 w-1/2">
            <p className="text-[24px] font-bold">95%</p>
            <p className="text-sm">
              of women with PCOS in Nigeria struggle to find reliable information about their condition.
            </p>
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="bg-[#C11574] text-[#ffffff] rounded-lg p-4 md:p-6">
          <p className="font-bold">
            MyCyster is here to change that.
          </p>
          <p className="text-sm mt-2">
            Join our growing community and be part of a supportive network dedicated to empowering women with PCOS.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
