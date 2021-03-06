import React from "react";

import MenuItem from "../menu-item/MenuItem";

import "./directory.styles.scss";

const Directory = () => {
  const sections = [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkTo: "/shop/hats",
      small: true,
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkTo: "/shop/jackets",
      small: true,
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkTo: "/shop/sneakers",
      small: true,
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      linkTo: "/shop/womens",
      small: false,
      size: "large",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      linkTo: "/shop/mens",
      small: false,
      size: "large",
    },
  ];

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, size }, index) => (
        <MenuItem key={index} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
