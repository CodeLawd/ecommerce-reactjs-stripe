import React, { useState } from "react";

import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection/collection-preview";

import "./shop-page.scss";

const ShopPage = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div>
      {shopData?.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
