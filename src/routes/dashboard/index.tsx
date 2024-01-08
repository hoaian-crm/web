import { Col, Row, Space } from "antd";
import React from "react";
import { GeneralStatistic } from "./components/general_statistic";
import { TopProductSale } from "./components/top_product_sale";
import { TotalRevenueProduct } from "./components/top_revenue_product";
import { TotalRevenue } from "./components/total_revenue";

const Page = () => {

  const getUrl = () => {

    var METABASE_SITE_URL = "http://metabase.relationc.com";

    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjF9LCJwYXJhbXMiOnt9LCJleHAiOjE3MDQ3MjE1NjA0ODMwfQ.xUpO29yNhTB9pI_a8hHnRXZFDZmzJT6Qginu7imgaOY";

    return METABASE_SITE_URL + "/embed/dashboard/" + token + "#theme=null&bordered=false&titled=false";

  }

  return <iframe
    src={getUrl()}
    frameBorder="0"
    width="100%"
    height="100%"
    allowTransparency
  ></iframe>
};

export default Page;
