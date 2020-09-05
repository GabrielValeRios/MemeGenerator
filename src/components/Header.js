import React from "react";
import { Head, Img, HeadTitle } from "../styled_configuration/HeaderStyles";

function Header() {
  return (
    <Head>
      <Img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"
      />
      <HeadTitle>Meme Generator!</HeadTitle>
    </Head>
  );
}

export default Header;
