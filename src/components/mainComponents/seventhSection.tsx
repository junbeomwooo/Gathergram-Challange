import Image from "next/image";


export default function SeventhSection() {
  return (
    <div className="w-full 2xl:h-[989px] bg-[#ffd0ec] flex items-center justify-center">
      <div className="2xl:w-[1640px] 2xl:h-[629px] bg-[#212121] 2xl:flex 2xl:px-28 py-20 justify-between px-8 h-full 2xl:rounded-2xl">
        {/* titles and buttons */}
        <div>
          <h1 className="text-[65px] leading-[90px] sm:text-[80px] font-[600] text-white sm:leading-[120px] 2xl:w-[895px] text-center 2xl:text-left">
            Ready to Plan Your Wedding?
          </h1>
          <h4 className="text-[20px] font-[300] text-white leading-[36px] 2xl:w-[777px] mt-2 mb-12 text-center 2xl:text-left">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et aliqua. Ut enim ad minim
            veniam, quis ut aliquip ex ea commodo consequat.&quot;
          </h4>
          <button className="flex w-full sm:w-[373px] h-[72px] bg-[#ffd0ec] rounded-full items-center justify-center m-auto 2xl:m-0 ">
          <h3 className="mr-2">Create Your Event for Free</h3>
          <Image src="/img/right2.png" alt="right button" width={24} height={24} />
          </button>
        </div>

        {/* image */}
        <Image src="/img/Rectangle.png" alt={"Rectangle"} width={567} height={480} className="w-[567px] h-auto rounded-xl mt-16 m-auto 2xl:m-0"/>
      </div>
    </div>
  );
}
