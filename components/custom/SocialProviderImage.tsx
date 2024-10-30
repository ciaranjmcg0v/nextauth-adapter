import Image from "next/image";

// Define props type
type SocialProviderImageProps = {
  socialProvider: string;
};

const SocialProviderImage = ({ socialProvider }: SocialProviderImageProps) => {
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
    case "linkedin":
      return (
        <Image
          src="https://img.icons8.com/fluency/48/linkedin.png"
          alt="LinkedIn Icon"
          width={25}
          height={25}
          className="rounded-full"
        />
      );
  }
};

export default SocialProviderImage;
