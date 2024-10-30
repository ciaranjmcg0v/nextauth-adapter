import { signIn, signOut } from "next-auth/react";

// Function to sign in using google provider
export async function googleLogin() {
  const action = await signIn("google", {
    redirectTo: "/dashboard",
  });

  console.log(action);
}

// Function to sign in using github provider
export async function githubLogin() {
  const action = await signIn("github", {
    redirectTo: "/dashboard",
  });

  console.log(action);
}

// Function to sign in using microsoft provider
export async function microsoftLogin() {
  const action = await signIn("microsoft-entra-id", {
    redirectTo: "/dashboard",
  });

  console.log(action);
}

// Function to sign in using microsoft provider
export async function linkedinLogin() {
  const action = await signIn("linkedin", {
    redirectTo: "/dashboard",
  });

  console.log(action);
}

// Function to sign out the current user
export async function signOutUser() {
  const action = await signOut({ redirectTo: "/" });
  console.log(action);
}
