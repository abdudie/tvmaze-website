import React, { useState, useEffect } from "react";
import "./Card.css";

const ShowsData = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Func1();
  }, [search]);
  // console.log(search);
  const Func1 = async () => {
    let API = `https://api.tvmaze.com/search/shows?q=${search}`;
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
      <br />
      <section>
        <div className="container">
          <div className="row">
            {data.map((element) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <div className="my-card card bg-light mb-5 rounded">
                    <a href={element.show.url}>
                      {element.show.image ? (
                        <img
                          className="card-image"
                          src={element.show.image.medium}
                          style={{ width: "22vw", height: "22vw" }}
                          alt={
                            element.show.name != null
                              ? element.show.name
                              : "Not found"
                          }
                        />
                      ) : (
                        <div>
                          <img
                            className="card-image"
                            src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                            style={{ width: "22vw", height: "22vw" }}
                            alt={element.show.name}
                          />
                        </div>
                      )}
                    </a>
                    <div className="card-body">
                      {element.show.rating.average ? (
                        <span className="card-text">
                          Rating: {element.show.rating.average}
                        </span>
                      ) : (
                        <span className="card-text">Rating: N/A</span>
                      )}
                    </div>

                    <h5 className="card-title text-primary">
                      {element.show.name}
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

export default ShowsData;
