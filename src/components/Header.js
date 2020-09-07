import React from "react";
import { Head, Img, HeadTitle } from "../styled_configuration/HeaderStyles";

function Header() {
  return (
    <div className="row">
      <Head>
        <Img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Problem?"
          className="col-2"
        />
        <HeadTitle>Meme Generator!</HeadTitle>
      </Head>
    </div>
  );
}

export default Header;
