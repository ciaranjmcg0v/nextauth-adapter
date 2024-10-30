"use client";

import UserCardMenu from "@/components/custom/UserCardMenu";
import UserProfileAvatar from "@/components/custom/UserProfileAvatar";
import SocialProviderImage from "../../components/custom/SocialProviderImage";

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
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      {/* Google View */}
      <div className="flex items-center justify-between p-4 bg-slate-100 rounded-full cursor-pointer">
        <div className="flex items-center">
          <SocialProviderImage socialProvider={socialProvider} />
          <div className="h-12 w-1 bg-slate-400 mx-2 rounded-full" />
        </div>
        <UserProfileAvatar
          imageSrc={userImage}
          fallbackName={`${firstName[0]} ${lastName[0]}`}
        />
        <div className="flex flex-col px-4">
          <span className="text-lg">
            {firstName} {lastName}
          </span>
          <span className="text-xs">{email}</span>
        </div>
        <UserCardMenu />
      </div>
    </div>
  );
}
