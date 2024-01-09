import React from "react";

const Page = () => {

  const getUrl = () => {

    var METABASE_SITE_URL = "https://metabase.relationc.com";

    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjF9LCJwYXJhbXMiOnt9LCJleHAiOjE3MDQ3ODI4NTUwfQ.ugLWgQiid1WiwznhH3o4ZGIbSqLdlSy0WSCtI9U2q1s";

    return METABASE_SITE_URL + "/embed/dashboard/" + token + "#theme=transparent&bordered=false&titled=false";

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

