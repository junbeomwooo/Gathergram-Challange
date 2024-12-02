import Image from "next/image";

// images

export default function SixthSection() {
  return (
    <div className="w-full xl:h-[1136px] bg-white mt-28 h-full mb-10 sm:mb-0">
      {/* title */}
      <div className="text-center m-auto px-8 xl:px-0">
        <h1 className="text-[36px] font-[600] text-[#101828] leading-[44px]">
          Frequently asked questions
        </h1>
        <h2 className="text-[20px] font-[400] text-[#475467] mt-7 leading-[30px]">
          Everything you need to know about the product and billing.
        </h2>
      </div>

      {/* icons + subtitles 1 */}
      <div className="xl:flex justify-center items-center mt-20 px-8 xl:px-0">
        {/* icon 1 */}
        <div className="xl:w-[384px] h-[178px] text-center mb-10 xl:m-0">
          <div className="w-[48px] h-[48px] bg-[#ffe3f3] border-[8px] border-solid border-[#fff8fc] rounded-full flex items-center justify-center m-auto">
            <Image src="/img/icon1.png" alt="icon1" width={20} height={17.83} />
          </div>
          <h3 className="text-[20px] font-[600] text-[#101828] my-4">
            Is there a free trial available?
          </h3>
          <h4 className="text-[16px] font-[700] text-[#475467] leading-[24px]">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </h4>
        </div>

        {/* icon 2 */}
        <div className="xl:w-[384px] h-[178px] text-center mb-10 xl:m-0">
          <div className="w-[48px] h-[48px] bg-[#ffe3f3] border-[8px] border-solid border-[#fff8fc] rounded-full flex items-center justify-center m-auto">
            <Image src="/img/icon2.png" alt="icon2" width={16} height={18} />
          </div>
          <h3 className="text-[20px] font-[600] text-[#101828] my-4">
            Can I change my plan later?
          </h3>
          <h4 className="text-[16px] font-[700] text-[#475467] leading-[24px]">
            Of course. Our pricing scales with your company. Chat to our
            friendly team to find a solution that works for you.
          </h4>
        </div>

        {/* icon 3 */}
        <div className="xl:w-[384px] h-[178px] text-center mb-10 xl:m-0">
          <div className="w-[48px] h-[48px] bg-[#ffe3f3] border-[8px] border-solid border-[#fff8fc] rounded-full flex items-center justify-center m-auto">
            <Image src="/img/icon3.png" alt="icon3" width={20} height={20} />
          </div>
          <h3 className="text-[20px] font-[600] text-[#101828] my-4">
            What is your cancellation policy?
          </h3>
          <h4 className="text-[16px] font-[400] text-[#475467] leading-[24px]">
            We understand that things change. You can cancel your plan at any
            time and we’ll refund you the difference already paid.
          </h4>
        </div>
      </div>

      {/* icons + subtitles 2 */}
      <div className="xl:flex justify-center items-center xl:mt-20 px-8 xl:px-0">
        {/* icon 4 */}
        <div className="xl:w-[384px] h-[178px] text-center mb-10 xl:m-0">
          <div className="w-[48px] h-[48px] bg-[#ffe3f3] border-[8px] border-solid border-[#fff8fc] rounded-full flex items-center justify-center m-auto">
            <Image src="/img/icon4.png" alt="icon4" width={16} height={20} />
          </div>
          <h3 className="text-[20px] font-[600] text-[#101828] my-4">
            Can other info be added to an invoice?
          </h3>
          <h4 className="text-[16px] font-[400] text-[#475467] leading-[24px]">
            At the moment, the only way to add additional information to
            invoices is to add the information to the workspace&apos;s name.
          </h4>
        </div>

        {/* icon 5 */}
        <div className="xl:w-[384px] h-[178px] text-center mb-10 xl:m-0">
          <div className="w-[48px] h-[48px] bg-[#ffe3f3] border-[8px] border-solid border-[#fff8fc] rounded-full flex items-center justify-center m-auto">
            <Image src="/img/icon5.png" alt="icon5" width={20} height={18} />
          </div>
          <h3 className="text-[20px] font-[600] text-[#101828] my-4">
            How does billing work?
          </h3>
          <h4 className="text-[16px] font-[400] text-[#475467] leading-[24px]">
            Plans are per workspace, not per account. You can upgrade one
            workspace, and still have any number of free workspaces.
          </h4>
        </div>

        {/* icon 6 */}
        <div className="xl:w-[384px] h-[178px] text-center xl:m-0">
          <div className="w-[48px] h-[48px] bg-[#ffe3f3] border-[8px] border-solid border-[#fff8fc] rounded-full flex items-center justify-center m-auto">
            <Image src="/img/icon6.png" alt="icon3" width={20} height={16} />
          </div>
          <h3 className="text-[20px] font-[600] text-[#101828] my-4">
            How do I change my account email?
          </h3>
          <h4 className="text-[16px] font-[400] text-[#475467] leading-[24px]">
            You can change the email address associated with your account by
            going to untitled.com/account from a laptop or desktop.
          </h4>
        </div>
      </div>

      {/* Still have questions? */}
      <div className="xl:w-[1216px] xl:h-[314px] bg-[#fff8fc] m-auto mt-24 h-[350px]">
        {/* Images */}
        <div className="pt-10">
          <div className="relative w-[120px] h-[56px] m-auto">
            <Image
              src="/img/Avatar1.png"
              alt="Avartar1"
              width={48}
              height={48}
              className="absolute left-0 bottom-0"
            />
            <Image
              src="/img/Avatar2.png"
              alt="Avartar2"
              width={56}
              height={56}
              className="absolute left-[30px] z-10"
            />
            <Image
              src="/img/Avatar3.png"
              alt="Avartar3"
              width={48}
              height={48}
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>
        <div className="text-center mt-10 px-8 xl:px-0">
          <h1 className="text-[20px] font-[600] text-[#101828]">
            Still have questions?
          </h1>
          <h2 className="text-[18px] font-[400] text-[#475467] mt-6 leading-[30px]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </h2>
          <button className="w-[134px] h-[48px] bg-[#f5169c] text-[white] rounded-[8px] mt-8">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}
