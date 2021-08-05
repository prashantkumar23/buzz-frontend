import { styled } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import Link from "next/link";

interface LinkButtonProps {
  href?: string;
}

const StyledLinkButton = styled(Button)<ButtonProps>({
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  fontSize: "0.7rem",
  paddingBottom: 0,
  margin: 0,
  textTransform: "none",
  fontFamily: "sans-serif",
});

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href = "#",
}) => {
  return (
    <Link href={href} passHref>
      <StyledLinkButton color="primary">{children}</StyledLinkButton>
    </Link>
  );
};
