import Image from "next/image";
import logo from "../../public/logo-tranparent.png";

export function Footer() {
  return (
    <section className="px-22 pt-18 bg-[#180B91]">
        <div className="grid grid-cols-3 gap-20">
          <div className="flex flex-col gap-4">
            <Image src={logo} alt="" />
            <p className="text-bg/30 max-w-72">Property due diligence and legal documentation assistance in Nigeria.</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-bg">Explore</p>

            <div className="flex flex-col gap-2">
              <a href="" className="text-bg/30">Start a search</a>
              <a href="" className="text-bg/30">Track a search</a>
              <a href="#legalDocuments" className="text-bg/30">Legal documents</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <p className="text-bg">Contact</p>
             <div className="flex flex-col gap-4">
              <p className="text-bg/30">info@capstoneglobalhq.com</p>
               <p className="text-bg/30">Abuja, Nigeria</p>
             </div>
          </div>
        </div>


        <div className="border-t border-bg/30 py-5 mt-30 ">
          <p className="text-bg/30">{`© ${new Date().getFullYear()} Capstone Property Intel. All rights reserved`}</p>
        </div>
    </section>
  );
}