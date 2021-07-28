import { ReactNode } from "react";
import Button from "@material-ui/core/Button";

export type AnchorButtonProps = {
  children: ReactNode;
  href: string;
};

export default function AnchorButton({ children, href }: AnchorButtonProps) {
  return (
    <Button target="_blank" color="inherit" href={href}>
      {children}
    </Button>
  );
}
