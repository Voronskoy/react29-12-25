import React from "react";
import styles from "./gamesList.module.css";
const Game = (props) => {
  const { game } = props;
  const { title, genre, isOnline, platforms, rating } = game;
  const showPlatform = (platform) => <li key={platform}>{platform}</li>;
  return (
    <article className={styles.game}>
      {isOnline && <span>Online</span>}
      <h2>{title}</h2>
      <p>genre:{genre}</p>
      <p>rating:{rating}</p>
      <ul>{platforms.map(showPlatform)}</ul>
    </article>
  );
};

export default Game;
