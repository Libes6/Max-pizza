import React from "react";
import ContentLoader from "react-content-loader";

const Placeholder = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="137" cy="137" r="137" />
    <rect x="0" y="281" rx="13" ry="13" width="280" height="20" />
    <rect x="0" y="324" rx="10" ry="10" width="280" height="88" />
    <rect x="7" y="431" rx="10" ry="10" width="95" height="30" />
    <rect x="181" y="430" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
);

export default Placeholder;
