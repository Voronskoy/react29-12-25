import React from "react";
import "./playList.css";
const Song = (props) => {
  const { song } = props;
  const { title, artist, genre, image } = song;
  return (
    <article className="song">
      <img src={image} alt={artist} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{genre}</p>
    </article>
  );
};

export default Song;
