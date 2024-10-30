"use client";

import { githubLogin, googleLogin, linkedinLogin, microsoftLogin } from "./actions/authActions";
import GithubButton from "../components/custom/SocialButtons/GithubButton";
import GoogleButton from "../components/custom/SocialButtons/GoogleButton";
import MicrosoftButton from "../components/custom/SocialButtons/MicrosoftButton";
import LinkedInButton from "@/components/custom/SocialButtons/LinkedInButton";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <GoogleButton onClick={() => googleLogin()} />
      <GithubButton onClick={() => githubLogin()} />
      <MicrosoftButton onClick={() => microsoftLogin()} />
      <LinkedInButton onClick={() => linkedinLogin()} />
    </div>
  );
}
