import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";
import Image from "next/image";

interface AvatarProps {
  link: string;
  image: StaticImageData;
}

export const AvatarImage: React.FC<AvatarProps> = ({ link, image }) => {
  return (
    <Link href={link} passHref>
      <Avatar
        sx={{
          cursor: "pointer",
        }}
      >
        <Image src={image} layout="fill" />
      </Avatar>
    </Link>
  );
};
