import Image from "next/image";
import Link from "next/link";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export const Buttons = () => {
  return (
    <Link href="/images/Enkhtaivan-MRI-result.pdf">
      <AwesomeButton type="primary" >
        Download CV
      </AwesomeButton>
    </Link>
  );
};
