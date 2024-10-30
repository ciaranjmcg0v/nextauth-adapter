"use client";

import { AtSign, LogOutIcon } from "lucide-react";
import Image from "next/image";
import { signOutUser } from "../actions/authActions";

export default function UserView({
  firstName,
  lastName,
  email,
  userImage,
  socialProvider,
}: {
  firstName: string;
  lastName: string;
  email: string;
  userImage: string;
  socialProvider: string;
}) {
  const socialProviderImage = () => {
    switch (socialProvider) {
      case "google":
        return (
          <Image
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="Google Icon"
            width={25}
            height={25}
            className="rounded-full"
          />
        );
      case "github":
        return (
          <Image
            src="https://img.icons8.com/fluency/48/github.png"
            alt="Github Icon"
            width={25}
            height={25}
            className="rounded-full"
          />
        );
      case "microsoft":
        return (
          <Image
            src="https://img.icons8.com/fluency/48/microsoft.png"
            alt="Microsoft Icon"
            width={25}
            height={25}
            className="rounded-full"
          />
        );
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      {/* Google View */}
      <div className="flex items-center justify-between p-4 bg-slate-100 rounded-full cursor-pointer">
        <div className="flex items-center">
          {socialProviderImage()}
          <div className="h-12 w-1 bg-slate-400 mx-2 rounded-full" />
        </div>
        {userImage && (
          <Image
            src={userImage}
            alt={`${firstName} ${lastName}`}
            width={50}
            height={50}
            className="rounded-full"
          />
        )}
        <div className="flex flex-col px-4">
          <span className="text-lg">
            {firstName} {lastName}
          </span>
          <span className="text-xs">
            <div className="flex items-center">
              <AtSign className="w-4 h-4 text-orange-500" />
              <span>{email}</span>
            </div>
          </span>
        </div>
      </div>

      <div
        className="flex items-center justify-between rounded-lg p-2 mt-4 cursor-pointer bg-red-600 text-white"
        onClick={signOutUser}
      >
        <LogOutIcon />
        <span className="ml-4">Logout</span>
      </div>
    </div>
  );
}
