import Image from "next/image";

export default function EighthSection() {
  return (
    <div className="w-full xl:h-[670px] bg-white 2xl:px-28 py-20 px-8 " id="contact">
      {/* title */}
      <div>
        <h4 className="text-[16px] font-[600] text-[#f5169c]">Contact us</h4>
        <h1 className="text-[36px] font-[600] text-[#101828] mt-6">
          We’d love to hear from you
        </h1>
        <h3 className="text-[20px] font-[300] text-[#475467] mt-8">
          Our friendly team is always here to chat.
        </h3>
      </div>
      
      {/* image + information */}
      <div className="xl:flex mt-14">
        {/* Box 1 */}
        <div className="xl:w-[336.46px] w-full h-[341.16px] mb-6 xl:mb-0 bg-[#fff6fc] p-8 mr-8">
          {/* Image box */}
          <div className="w-[56.47px] h-[56.47px] rounded-2xl bg-[#f5169c] flex items-center justify-center">
            <Image src="/img/Icon7.png" width={21.89} height={20} alt="Icon7" />
          </div>

          {/* information */}
          <div className="mt-20">
            <h1 className="text-[23.5px] font-[600] text-[#101828]">
              Chat to sales
            </h1>
            <h2 className="text-[18.82px] font-[300] text-[#475467] mt-5">
              Speak to our friendly team.
            </h2>
            <h3 className="text-[18.82px] font-[400] text-[]#212121 mt-5 leading-[28.23px]">
              sales@GatherGram.com
            </h3>
          </div>
        </div>

        {/* Box 2 */}
        <div className="xl:w-[336.46px] w-full h-[341.16px] mb-6 xl:mb-0 bg-[#fff6fc] p-8 mr-8">
          {/* Image box */}
          <div className="w-[56.47px] h-[56.47px] rounded-2xl bg-[#f5169c] flex items-center justify-center">
            <Image src="/img/Icon8.png" width={21.89} height={20} alt="Icon8" />
          </div>

          {/* information */}
          <div className="mt-20">
            <h1 className="text-[23.5px] font-[600] text-[#101828]">
              Chat to support
            </h1>
            <h2 className="text-[18.82px] font-[300] text-[#475467] mt-5">
              We’re here to help.
            </h2>
            <h3 className="text-[18.82px] font-[400] text-[]#212121 mt-5 leading-[28.23px]">
              support@GatherGram.com
            </h3>
          </div>
        </div>
        {/* Box 3 */}
        <div className="xl:w-[336.46px] w-full h-[341.16px] mb-6 xl:mb-0 bg-[#fff6fc] p-8 mr-8">
          {/* Image box */}
          <div className="w-[56.47px] h-[56.47px] rounded-2xl bg-[#f5169c] flex items-center justify-center">
            <Image src="/img/Icon9.png" width={21.89} height={20} alt="Icon9" />
          </div>

          {/* information */}
          <div className="mt-20">
            <h1 className="text-[23.5px] font-[600] text-[#101828]">
              Visit us
            </h1>
            <h2 className="text-[18.82px] font-[300] text-[#475467] mt-5">
              Visit our office HQ.
            </h2>
            <h3 className="text-[18.82px] font-[400] text-[]#212121 mt-5 leading-[28.23px]">
              100 Smith Street Collingwood VIC 3066 AU
            </h3>
          </div>
        </div>
        {/* Box 4 */}
        <div className="xl:w-[336.46px] w-full  h-[341.16px] mb-6 xl:mb-0 bg-[#fff6fc] p-8">
          {/* Image box */}
          <div className="w-[56.47px] h-[56.47px] rounded-2xl bg-[#f5169c] flex items-center justify-center">
            <Image src="/img/Icon10.png" width={21.89} height={20} alt="Icon10" />
          </div>

          {/* information */}
          <div className="mt-20">
            <h1 className="text-[23.5px] font-[600] text-[#101828]">Call us</h1>
            <h2 className="text-[18.82px] font-[300] text-[#475467] mt-5">
              Mon-Fri from 8am to 5pm.
            </h2>
            <h3 className="text-[18.82px] font-[400] text-[]#212121 mt-5 leading-[28.23px]">
              +1 (555) 000-0000
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
