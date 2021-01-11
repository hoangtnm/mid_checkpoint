import React from "react";
import { useParams } from "react-router-dom";

const SongDetails = (props) => {
  const { id } = useParams();
  const song = props.data.filter((s) => s.id === id)[0];

  return (
    <div>
      <h3>Title: {song.title}</h3>
      <h3>Author: {song.author}</h3>
      <h3>Date: {song.publishedDate}</h3>
      <p>Lyric: {song.lyric}</p>
    </div>
  );
};

export default SongDetails;
