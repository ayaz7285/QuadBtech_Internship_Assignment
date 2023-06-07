// This is the home page of the website. 
// It shows a list of shows with data fetched from "https://api.tvmaze.com/search/shows?q=all"

import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Home() {
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShowList(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Trending Shows</h1>
      <ul className="list">
        {showList.map((show) => (
          <Card data={show.show} />
        ))}
      </ul>
    </div>
  );
}
