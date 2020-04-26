import React from "react";
import "./table-body.css";
import BASE_GAME_URL from "./../App.constants";

function TableBody(props) {
  const {
    gameDetail: {
      title,
      url,
      platform,
      score,
      genre,
      editors_choice: editorsChoice,
      release_year: releaseYear
    }
  } = props;

  return (
    <tr>
      <td>
        <a href={`${BASE_GAME_URL}${url}`}>{title}</a>
      </td>
      <td>{platform}</td>
      <td>{score}</td>
      <td>{genre}</td>
      <td>{editorsChoice}</td>
      <td>{releaseYear}</td>
    </tr>
  );
}

export default TableBody;
