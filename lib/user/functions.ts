"use server";
import jwt from "jsonwebtoken";

// Using session data from nextauth to get user information
import { auth } from "@/app/auth/auth";

export const decodeAccessToken = async () => {
  const session = await auth();

  if (!session?.accessToken) return null;

  try {
    // Decode the token without verifying
    const decodedToken = jwt.decode(session.accessToken);

    // Verify the token
    const verifiedToken = jwt.verify(
      session.accessToken,
      process.env.JWT_SECRET!
    );

    console.log("Decoded Token:", decodedToken);
    return { decodedToken, verifiedToken };
  } catch (error) {
    console.error("Token verification failed:", error);
    return null; // Return null in case of verification failure
  }
};

export const identifySocialProvider = async () => {
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
  }

  return null; // Return null if no provider is identified
};

// Using session information, get user fullname
export const getUserNameFromSession = async () => {
  const session = await auth();
  const FullName = session?.user?.name!;

  return FullName;
};

export const getuserEmailFromSession = async () => {
  const session = await auth();
  const email = session?.user?.email!;

  return email;
};

// Using session name, split into firstname and lastname and return values
export const getUserFirstAndLastName = async () => {
  const FullName = (await getUserNameFromSession()).split(" ");
  const firstName = FullName[0];
  const lastName = FullName[1];

  return { firstName, lastName };
};

export const getUserImage = async () => {
  const session = await auth();
  const imageString = session?.user?.image!;

  return imageString;
};

/**
 * Fetch user profile information from Microsoft Graph API.
 * @returns {Promise<Object|null>} User profile data or null if failed.
 * Explore more here: https://learn.microsoft.com/en-us/graph/use-the-api
 */
export const fetchUserProfileFromGraphAPI = async () => {
  const GRAPH_API_URL = "https://graph.microsoft.com/v1.0/me";
  const session = await auth();

  // Ensure we have an access token
  const accessToken = session?.accessToken;
  if (!accessToken) {
    console.error("Access token is missing.");
    return null;
  }

  // Define headers for the API request
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(GRAPH_API_URL, {
      method: "GET",
      headers,
    });

    // Check if the response is okay
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching user profile:", errorData);
      return null; // Handle the error appropriately
    }

    // Parse the response data
    const userProfile = await response.json();
    return userProfile; // Return the user profile data
  } catch (error) {
    console.error("An error occurred while fetching the user profile:", error);
    return null; // Handle unexpected errors
  }
};