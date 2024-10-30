import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfileAvatar = ({
  imageSrc,
  fallbackName,
}: {
  imageSrc: string;
  fallbackName: string;
}) => {
  return (
    <Avatar>
      <AvatarImage src={imageSrc} />
      <AvatarFallback className="bg-slate-300">{fallbackName}</AvatarFallback>
    </Avatar>
  );
};
export default UserProfileAvatar;
