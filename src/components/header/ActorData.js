import React, { useState, useEffect } from "react";

import "./Card.css";

const ActorData = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Func1();
  }, [search]);
  console.log(search);
  const Func1 = async () => {
    let API = `https://api.tvmaze.com/search/people?q=${search}`;
    try {
      let response = await fetch(API);
      let res = await response.json();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main">
      {console.log(data)}
      <section className="search-area">
        <div className="container-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-search"
            placeholder="Search by Shows name...."
          />
        </div>
      </section>

      <section>
        <div className="container-2">
          <div className="inner-content">
            {data.map((element) => {
              return (
                <div className="top-details">
                  <div className="card">
                    <a href={element.person.url}>
                      {element.person.image ? (
                        <img
                          src={element.person.image.medium}
                          className="image"
                          style={{ width: "255px", height: "325px" }}
                          alt={
                            element.person.name != null
                              ? element.person.name
                              : "Not found"
                          }
                        />
                      ) : (
                        <div>
                          <img
                            className="image"
                            src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                            style={{ width: "250px", height: "350px" }}
                            alt="Not Found"
                          />
                        </div>
                      )}
                    </a>
                    <div className="card-body">
                      {element.person.birthday ? (
                        <p>Birthday: {element.person.birthday}</p>
                      ) : (
                        <p>Birthday: N/A</p>
                      )}
                    </div>
                    <h5 className="text-danger text-center">
                      {element.person.name}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActorData;
