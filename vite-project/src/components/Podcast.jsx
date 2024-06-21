import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import backButton from "../assets/back-button.png"
const Podcasts = () => {
  const [shows, setShows] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [sortedShows, setSortedShows] = useState([]);
  const params = useParams();

 
  const genresFilter = searchParams.get("genres");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://podcast-api.netlify.app/`);
        const data = await res.json();
        /** Setting the Podcasts to show in alphabetical order */
        const defaultSortedShows = data.sort((a, b) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();
          return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
        });
        setShows(defaultSortedShows);
        setSortedShows(data);
      } catch (error) {
        console.error("Fetch error:" + error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
 
  const genreFilterNumber = genresFilter ? parseInt(genresFilter, 10) : null;

  
  const displayFilteredPodcasts = genreFilterNumber
    ? shows.filter((genre) => genre.genres.includes(genreFilterNumber))
    : shows;

 

  const showsCards = displayFilteredPodcasts.map((show) => (
    <div className="show-card" key={show.id}>
      <Link to={`/podcasts/${show.id}`}>
        <img src={show.image} alt="" />
        <p>{show.title}</p>
      </Link>
    </div>
  ));

  /**Sorting From Z - A
   */
  const sortShowsZA = () => {
    const copiedShows = [...shows];
    copiedShows.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
    });
    setShows(copiedShows);
  };
  const sortShowsAZ = () => {
    const sortedPodcasts = [...shows].sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
    });

    setShows(sortedPodcasts);
  };

  const newUpdatedShows = () => {
    const sortedPodcasts = [...shows].sort((a, b) => {
      const titleA = a.updated;
      const titleB = b.updated;
      return titleA < titleB ? 1 : titleA > titleB ? -1 : 0;
    });

    setShows(sortedPodcasts);
  };

  const olderUpdatedShows = () => {
    const sortedPodcasts = [...shows].sort((a, b) => {
      const titleA = a.updated;
      const titleB = b.updated;
      return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
    });

    setShows(sortedPodcasts);
  };

  return (
    <>
    
      <div className="podcast-list-container">
      <Link to='..' relative="path"><img src={backButton} alt=""/></Link>
        <h1>All Podcasts</h1>
        <button onClick={sortShowsAZ}>A-Z</button>
        <button onClick={sortShowsZA}>Z-A</button>
        <div>
          <button onClick={newUpdatedShows}>NEWEST</button>
          <button onClick={olderUpdatedShows}>OLDEST</button>
        </div>
        <div className="select-genre">
          <h2>Select Genre</h2>
          <button onClick={() => setSearchParams({ genres: "" })}>
            All Shows
          </button>
        </div>
        <div className="filter-genres-buttons">
          <button onClick={() => setSearchParams({ genres: 1 })}>
            Personal Growth
          </button>
          <button onClick={() => setSearchParams({ genres: 2 })}>
            Investigative Journalism
          </button>
          <button onClick={() => setSearchParams({ genres: 3 })}>
            History
          </button>
          <button onClick={() => setSearchParams({ genres: 4 })}>Comedy</button>
          <button onClick={() => setSearchParams({ genres: 5 })}>
            Entertainment
          </button>
          <button onClick={() => setSearchParams({ genres: 6 })}>
            Business
          </button>
          <button onClick={() => setSearchParams({ genres: 7 })}>
            Fiction
          </button>
          <button onClick={() => setSearchParams({ genres: 8 })}>News</button>
          <button onClick={() => setSearchParams({ genres: 9 })}>
            Kids & Family
          </button>
        </div>
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div className="podcast-card-list">{showsCards}</div>
        )}
      </div>
    </>
  );
};

export default Podcasts;
