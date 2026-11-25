import Image from "next/image";

import sms from "../../../public/sms.png";
import call from "../../../public/call.png";
import location from "../../../public/location-icon.png";

export function ContactInfo() {
  const info = [
    {
      iconBg: "#FFF4EC",
      icon: sms,
      infoType: "Email",
      content: "Our friendly team is here to help.",
      info: "info@propertyintel.com",
    },
    {
      iconBg: "#F2F7FF",
      icon: call,
      infoType: "Phone",
      content: "Mon-Fri from 8am to 5pm.",
      info: "+234-808-707-8517",
    },
    {
      iconBg: "#EEFFFA",
      icon: location,
      infoType: "Office",
      content: "Come say hello at our office HQ.",
      info: "Abuja FCT & Uyo, Akwa Ibom",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 lg:gap-10 mt-6">
        <h2 className="text-h2 font-bold text-[#131313]">
          We’d love to hear from you
        </h2>
        <p className="font-plus text-[20px]">
          Need something cleared up? Here are our most frequently asked
          questions.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-8 my-15">
        {info.map((item) => (
          <div
            key={item.infoType}
            className="flex flex-col gap-3"
            
          >
            <div className="w-15 rounded-lg p-2 flex items-center justify-center" style={{ backgroundColor: item.iconBg }}>
            <Image src={item.icon} alt={item.infoType} className="h-10 w-10" />
            </div>
            <h3 className="font-bold font-plus text-[#131313] text-h3">{item.infoType}</h3>
            <p className="font-plus text-[18px] ">{item.content}</p>
            <p className="font-plus text-[#006FFF]  break-words">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
