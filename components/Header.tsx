import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div>
        <SocialIcon
          url="https://www.linkedin.com/in/gabriel-sitorus/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/GabeS97"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
    </header>
  );
}

export default Header;
