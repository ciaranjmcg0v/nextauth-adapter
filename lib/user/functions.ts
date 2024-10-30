"use server";

// Using session data from nextauth to get user information
import { auth } from "@/app/auth/auth";
import { FullNameLastName } from "@/next-auth";

/**
 * Determines the social provider used from the token that is returned in the auth response.
 * @returns {String} Social Provider Name
 */
export const identifySocialProvider = async (): Promise<string | null> => {
  const session = await auth();

  if (session?.user && session?.account) {
    const provider = session.account.provider;

    if (provider === "google") {
      return "google";
    }

    if (provider === "github") {
      return "github";
    }

    if (provider === "microsoft-entra-id") {
      return "microsoft";
    }

    if (provider === "linkedin") {
      return "linkedin";
    }
  }

  return null; // Return null if no provider is identified
};

/**
 * Using session data, get users full name.
 * @returns {String} User Full name
 */
export const getUserFullNameFromSession = async (): Promise<string> => {
  const session = await auth();
  const FullName = session!.user!.name!;

  return FullName;
};

/**
 * Using session name, splits into two parts: Firstname and Lastname.
 * @returns {String} User Firstname and Lastname.
 */
export const getUserFirstAndLastName = async (): Promise<FullNameLastName> => {
  const FullName = (await getUserFullNameFromSession()).split(" ");
  const firstName = FullName[0];
  const lastName = FullName[1];

  return { firstName, lastName };
};

/**
 * Fetch user profile email from session data.
 * @returns {String} User profile email
 */
export const getuserEmailFromSession = async (): Promise<string> => {
  const session = await auth();
  const email = session!.user!.email!;

  return email;
};

/**
 * Fetch user profile image from session data.
 * @returns {String} User profile image
 */
export const getUserImage = async (): Promise<string> => {
  const session = await auth();
  const imageString = session!.user!.image!;

  return imageString;
};

// /**
//  * Fetch user profile information from Microsoft Graph API.
//  * @returns {Promise<Object|null>} User profile data or null if failed.
//  * Explore more here: https://learn.microsoft.com/en-us/graph/use-the-api
//  */
// export const fetchUserProfileFromGraphAPI = async (): Promise<object | null> => {
//   const GRAPH_API_URL = "https://graph.microsoft.com/v1.0/me";
//   const session = await auth();

//   // Ensure we have an access token
//   const accessToken = session?.accessToken;
//   if (!accessToken) {
//     console.error("Access token is missing.");
//     return null;
//   }

//   // Define headers for the API request
//   const headers = {
//     Authorization: `Bearer ${accessToken}`,
//     "Content-Type": "application/json",
//   };

//   try {
//     const response = await fetch(GRAPH_API_URL, {
//       method: "GET",
//       headers,
//     });

//     // Check if the response is okay
//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("Error fetching user profile:", errorData);
//       return null; // Handle the error appropriately
//     }

//     // Parse the response data
//     const userProfile = await response.json();
//     return userProfile; // Return the user profile data
//   } catch (error) {
//     console.error("An error occurred while fetching the user profile:", error);
//     return null; // Handle unexpected errors
//   }
// };
