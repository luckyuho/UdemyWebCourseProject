import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrtenSearch] = useState("");
  const auth = "563492ad6f91700001000001aef1c03756b94dc88c077e93631ec3ad";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;
  let id = 1;

  // fetch picture from pexels api: https://www.pexels.com/zh-tw/api/
  const search = async (url) => {
    setPage(1);

    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
    setInput("");
  };

  // Load more pictures
  const morepicture = async () => {
    let newURL;

    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    }

    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
  };

  // // Loads data at the beginning
  // useEffect(() => {
  //   search(initialURL);
  // }, []);

  useEffect(() => {
    id = 1;
    if (currentSearch === "") {
      search(initialURL);
    } else {
      search(searchURL);
    }
  }, [currentSearch]);

  useEffect(() => {
    if (page != 1) {
      id = 1;
      morepicture();
    }
  }, [page]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setCurrtenSearch(input);
        }}
        setInput={setInput}
        input={input}
        currentSearch={currentSearch}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={() => setPage(page + 1)}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
