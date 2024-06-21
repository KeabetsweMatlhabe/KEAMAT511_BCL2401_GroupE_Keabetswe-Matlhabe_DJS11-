import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderLogo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        <img src={HeaderLogo} alt="Podcast Logo" />
      </Link>
      <nav>
        <NavLink to="/series">Series</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink className="navlink" to="/favorites">
          My Favorites
        </NavLink>
      </nav>
    </header>
  );
}

function Favorites({
  loading,
  show,
  backButton,
  expandedDescriptions,
  handleDescriptionToggle,
  currentEpisode,
  handleFavoriteClick,
  isFavorite,
  // Add season-related props/functions here
  selectedSeason,
  HandleSeasonClick,
})

{
  return (
    <div className="podcast-details-container">
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <Link to=".." relative="path">
            <img src={backButton} alt="" />
          </Link>
          <div>
            <h2>{show.title}</h2>
            <div className="podcast-details">
              <div>
                <img src={show.image} alt={show.title} />
                <p>{show.updated}</p>
              </div>
              <p>
                {expandedDescriptions
                  ? show.description
                  : `${show.description.slice(0, 150)}...`}
                <button onClick={handleDescriptionToggle}>
                  {expandedDescriptions ? "Show Less" : "Read More"}
                </button>
              </p>
            </div>
          </div>
          <h1>Seasons</h1>
          {show.seasons && show.seasons.length > 0 && (
            <div className="podcast-seasons-container">
              {show.seasons.map((season, index) => (
                <div className="podcast-seasons" key={index}>
                  <h3>{season.title}</h3>
                  <img
                    src={season.image}
                    alt={season.title}
                    onClick={() => HandleSeasonClick(index)}
                  />
                  {/* THE EPISODES */}
                  {selectedSeason === index && (
                    <>
                      <h1>Episodes</h1>
                      {season.episodes.map((episode) => (
                        <div
                          className="episodes"
                          key={episode.id}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleEpisodeClick(episode)}
                        >
                          <img src={season.image} alt="" />
                          <h6>{episode.title}</h6>
                          <button onClick={() => handleFavoriteClick(episode)}>
                            {isFavorite(episode) ? "❤️" : "♡"}
                          </button>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {currentEpisode && (
        <div className="audio-player">
          <img src={show.image} alt="" />
          <audio controls autoPlay>
            <source src={currentEpisode.file} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <h5>{currentEpisode.title}</h5>
        </div>
      )}
    </div>
  );
}

export default Header;
//export default SeriesDetails;

