import React from "react";
import Card from "./card.js";

const CardComponents = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <Card
        imgSrc="https://static.nike.com/a/images/c_limit,w_800,f_auto/t_product_v1/wohf5k8sjdmgogckoczk/air-jordan-1-mid-shoes-D8g1Qq.png"
        name="Air Jordan 1 Low"
        price="1000"
      />
      <Card
        imgSrc="https://static.nike.com/a/images/c_limit,w_800,f_auto/t_product_v1/f52a5eff-69b9-46d0-96af-a86b4506071d/air-jordan-1-low-se-shoes-j6GSq5.png"
        name="Air Jordan 1 Low SE"
        price="1790"
      />
      <Card
        imgSrc="https://static.nike.com/a/images/c_limit,w_800,f_auto/t_product_v1/4a1cbd76-3616-47c4-9c16-da16012a8481/air-jordan-1-mid-shoes-bCZvwv.png"
        name="Air Jordan 1 Mid"
        price="1400"
      />

      <Card
        imgSrc="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee936b34-8a9d-47cf-815c-6ab4900ff8d6/air-jordan-1-retro-high-og-shoes-DRDX5L.png"
        name="Air Jordan high"
        price="1000"
      />
      <Card
        imgSrc="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa65cb87-5759-4fe7-8584-d99622332105/jordan-1-retro-high-og-younger-shoes-MxLdMf.png"
        name="Jordan 1 Retro High OG"
        price="1790"
      />
      <Card
        imgSrc="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6e9a482-3df8-446d-8c83-7c4ae1855302/jordan-1-mid-older-shoes-4jVrbm.png"
        name="Air Jordan 7 Retro BBS"
        price="1400"
      />
      <Card
        imgSrc="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/73723831-d0d7-4af9-b32c-b62a84010a3a/air-jordan-7-retro-bbs-shoes-JMdXLQ.png"
        name="Air Jordan 7 Retro BBS"
        price="1000"
      />
      <Card
        imgSrc="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/128dc053-f8b2-4b41-9e4c-9d2348c38cc8/zion-2-basketball-shoes-rXvLxc.png"
        name="Zion 2"
        price="1790"
      />
      <Card
        imgSrc="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53aa44fb-ed82-479f-a617-65e87ab4a850/air-jordan-1-zoom-cmft-2-shoes-MHGQGv.png"
        name="Air Jordan 1 Zoom CMFT 2"
        price="1400"
      />
    </div>
  );
};

export default CardComponents;
