import React from "react";
import "./Header.css";

const arr = [
  {
    name: "Actor",
    value: "people",
    type: "radio",
  },
  {
    name: "Shows",
    value: "shows",
    type: "radio",
  },
];

const Header = ({ setSearch, search, rV, setRV }) => {
  const onClickHandler = (e) => {
    setRV(e.target.value);
  };
  console.log(rV);
  return (
    <>
      <span className="header">TVmaze</span>
      <div className="searchbox">
        <form>
          <br />
          {arr.map((e) => {
            return (
              <>
                <input
                  type={e.type}
                  name={e.name}
                  value={e.value}
                  checked={rV === e.value}
                  onClick={onClickHandler}
                ></input>
                <label>{e.name}</label>
              </>
            );
          })}
        </form>
      </div>
    </>
  );
};

export default Header;
