import React, { useState, useEffect } from "react";
import "./Card.css";

const ShowsData = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Func1();
  }, [search]);
  console.log(search);
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
                    <a href={element.show.url}>
                      {element.show.image ? (
                        <img
                          className="image"
                          src={element.show.image.medium}
                          alt={
                            element.show.name != null
                              ? element.show.name
                              : "Not found"
                          }
                        />
                      ) : (
                        <div>
                          <img
                            className="image"
                            src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                            style={{ width: "250px", height: "350px" }}
                            alt={element.show.name}
                          />
                        </div>
                      )}
                    </a>
                    <div className="card-body">
                      {element.show.rating.average ? (
                        <span>Rating: {element.show.rating.average}</span>
                      ) : (
                        <span>Rating: N/A</span>
                      )}
                    </div>

                    <h5 className="text-danger text-center">
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
