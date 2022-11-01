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
      <br />
      <div className="search-area">
        <div className="container-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-search"
            placeholder="Search by People name...."
          />
        </div>
      </div>
      <br />
      <section>
        <div className="container">
          <div className="row">
            {data.map((element) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="my-card card bg-light mb-5 rounded">
                    <a href={element.person.url}>
                      {element.person.image ? (
                        <img
                          src={element.person.image.medium}
                          className="card-image"
                          style={{ width: "22vw", height: "22vw" }}
                          alt={
                            element.person.name != null
                              ? element.person.name
                              : "Not found"
                          }
                        />
                      ) : (
                        <div>
                          <img
                            className="card-image"
                            src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                            style={{ width: "22vw", height: "22vw" }}
                            alt="Not Found"
                          />
                        </div>
                      )}
                    </a>
                    <div className="card-body">
                      {element.person.birthday ? (
                        <p className="card-text">
                          Birthday: {element.person.birthday}
                        </p>
                      ) : (
                        <p className="card-text">Birthday: N/A</p>
                      )}
                    </div>
                    <h5 className="card-title text-center text-primary">
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
