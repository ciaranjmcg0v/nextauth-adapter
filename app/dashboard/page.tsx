import { auth } from "@/app/auth/auth";
import {
  getuserEmailFromSession,
  getUserFirstAndLastName,
  getUserImage,
  identifySocialProvider,
} from "@/lib/user/functions";
import UserView from "./UserView"; // Import the Client Component

export default async function DashboardView() {
  const session = await auth();
  if (!session?.user) {
    // Handle redirect logic or return null
    return null; // or redirect to another page
  }

  // Fetch user details (move these to another file and export the values as an object?)
  const { firstName, lastName } = await getUserFirstAndLastName();
  const email = await getuserEmailFromSession();
  const userImage = await getUserImage();
  const provider = await identifySocialProvider();

  // Pass the fetched data to the Client Component
  return (
    <UserView
      firstName={firstName}
      lastName={lastName}
      email={email}
      userImage={userImage}
      socialProvider={provider!}
    />
  );
}
