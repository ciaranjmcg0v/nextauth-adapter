"use client";

import { githubLogin, googleLogin, microsoftLogin } from "./actions/authActions";
import GithubButton from "./components/custom/GithubButton";
import GoogleButton from "./components/custom/GoogleButton";
import MicrosoftButton from "./components/custom/MicrosoftButton";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <GoogleButton onClick={() => googleLogin()} />
      <GithubButton onClick={() => githubLogin()} />
      <MicrosoftButton onClick={() => microsoftLogin()} />
      <MicrosoftButton onClick={() => microsoftLogin()} />
    </div>
  );
}
