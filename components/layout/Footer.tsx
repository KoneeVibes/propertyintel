import Image from "next/image";
import logo from "../../public/logo-tranparent.png";

export function Footer() {
  return (
    <section className="px-5 pt-12 sm:px-8 sm:pt-14 lg:px-22 lg:pt-18 bg-[#180B91]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          <div className="flex flex-col gap-4">
            <Image src={logo} alt="" />
            <p className="text-bg/30 max-w-72">Property due diligence and legal guidance in Nigeria.</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-bg">Explore</p>

            <div className="flex flex-col gap-2">
              <a href="" className="text-bg/30">Start a search</a>
              <a href="" className="text-bg/30">Track a search</a>
              <a href="" className="text-bg/30">Further consultancy</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <p className="text-bg">Contact</p>
             <div className="flex flex-col gap-4">
              <p className="text-bg/30">info@propertyIntel.ng</p>
               <p className="text-bg/30">Abuja, Nigeria</p>
             </div>
          </div>
        </div>


        <div className="border-t border-bg/30 py-5 mt-10 lg:mt-30 ">
          <p className="text-bg/30">{`© ${new Date().getFullYear()} Capstone Property Intel. All rights reserved`}</p>
        </div>
    </section>
  );
}