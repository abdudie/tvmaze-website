import React from "react";
import ActorData from "./ActorData";
import ShowsData from "./ShowsData";

import "./TvmazeSearch.css";

const TvmazeSearch = ({ search, setSearch, rV, setrV }) => {
  console.log(rV);
  return (
    <div className="main">
      {rV === "people" ? <ActorData /> : ""}
      {rV === "shows" ? <ShowsData /> : ""}
      <br />
      <div className="bottom-jumbo jumbotron"></div>
    </div>
  );
};

export default TvmazeSearch;
