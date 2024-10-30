import React from "react";
import Microsoft from "@/public/icons/microsoft.svg";
import Image from "next/image";

const MicrosoftButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="w-[240px] flex items-center justify-between border p-3 cursor-pointer hover:bg-slate-200 transition-all rounded-lg"
      onClick={onClick}
    >
      <Image src={Microsoft} alt="Microsoft Icon" className="w-6 h-6 rounded-full" />
      <div className="h-8 w-1 bg-slate-400 mx-2 rounded-full" />
      <span className="">Sign in with Microsoft</span>
    </div>
  );
};

export default MicrosoftButton;