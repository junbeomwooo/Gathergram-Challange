import Image from "next/image";

export default function ThirdSection() {
  return (
    <div className="w-full xl:h-[898px] mt-32 bg-[#212121] text-white relative" id="howItWorks">
    <Image
      src="/img/Dotline.png"
      width={1000}
      height={1000}
      alt="background dot line"
      className="absolute mt-80 z-0 w-full h-auto"
    />
    <div className="2xl:w-[821px] m-auto pt-32 px-10">
      <h1 className="font-[600] text-[48px] text-center">How It works</h1>
      <h3 className="text-[22px] font-[400] mt-10 text-center leading-[36px]">
        &quot;Easily create and manage your wedding events, from the
        ceremony to the reception.&quot;
      </h3>
    </div>
    <div className="w-full flex justify-center">
      <div className="xl:w-[1639px] xl:h-[296px] xl:flex justify-between mt-32 z-10">
        {/* Icon here */}
        <div className="xl:w-[301px] xl:h-[256px] 2xl:w-[351px] 2xl:h-[296px] bg-[#fdfdfd] xl:rounded-3xl text-black px-10 py-20 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] rounded-full text-center pt-[100px] sm:pt-32 m-auto mb-8 xl:pt-[45px] 2xl:pt-[80px]">
          <h2 className="text-[44px] font-[400] mb-5">Icon here</h2>
          <h3 className="text-[24px] font-[400] mb-5">Sign up</h3>
          <h4 className="text-[18px] font-[400] leading-[24px]">
            “Create your free account and get started in minutes.”
          </h4>
        </div>
        {/* Icons */}
        <div className="xl:w-[301px] xl:h-[256px] 2xl:w-[351px] 2xl:h-[296px] bg-[#ffdef4] xl:rounded-3xl text-black px-10 py-20  w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] rounded-full text-center  pt-[100px] sm:pt-32 m-auto  mb-8 xl:pt-[45px] 2xl:pt-[80px]">
          <h2 className="text-[44px] font-[400] mb-5">Icons</h2>
          <h3 className="text-[24px] font-[400] mb-5">Positive Reviews</h3>
          <h4 className="text-[18px] font-[400] leading-[24px]">
            Turpis nasceturvel malesuada enim eget eget.
          </h4>
        </div>
        {/* Icon */}
        <div className="xl:w-[301px] xl:h-[256px] 2xl:w-[351px] 2xl:h-[296px] bg-[#fdfdfd] xl:rounded-3xl text-black px-10 py-20  w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] rounded-full text-center  pt-[100px] sm:pt-32 m-auto mb-8 xl:pt-[45px] 2xl:pt-[80px] ">
          <h2 className="text-[44px] font-[400] mb-5">Icon</h2>
          <h3 className="text-[24px] font-[400] mb-5">Regular Users</h3>
          <h4 className="text-[18px] font-[400] leading-[24px]">
            Scale your workload without waiting for hte engineering team.
          </h4>
        </div>
        {/* Icon */}
        <div className="xl:w-[301px] xl:h-[256px] 2xl:w-[351px] 2xl:h-[296px] bg-[#fdfdfd] xl:rounded-3xl text-black px-10 py-20  w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] rounded-full text-center  pt-[100px] peer-first:sm:pt-32 m-auto mb-8 xl:pt-[45px] 2xl:pt-[80px] ">
          <h2 className="text-[44px] font-[400] mb-5">Icon</h2>
          <h3 className="text-[24px] font-[400] mb-5">Team Members</h3>
          <h4 className="text-[18px] font-[400] leading-[24px]">
            Turpis nasceturvel malesuada enim eget eget.
          </h4>
        </div>
      </div>
    </div>
  </div>
  );
}