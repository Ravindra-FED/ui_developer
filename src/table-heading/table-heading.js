import React from "react";
import { TABLE_HEADING_DETAILS } from "./../App.constants";
import Icon from "./../icon/icon";
import "./table-heading.css";

function TableHeading(props) {
  const {
    TABLE_HEADING_TITLE,
    TABLE_HEADING_PLATFORM,
    TABLE_HEADING_SCORE,
    TABLE_HEADING_GENRE,
    TABLE_HEADING_EDITORS_CHOICE,
    TABLE_HEADING_RELEASE_YEAR
  } = TABLE_HEADING_DETAILS;

  const {
    sortTableOnScoreInAscendingOrder,
    sortTableOnScoreInDescendingOrder,
    sortTableOnPlatForm
  } = props;

  return (
    <tr>
      <th>{TABLE_HEADING_TITLE}</th>
      <th>
        {TABLE_HEADING_PLATFORM}
        <button onClick={sortTableOnPlatForm}>
          <Icon className="fa fa-caret-up" fontSize="14px" />
        </button>
      </th>
      <th>
        {TABLE_HEADING_SCORE}
        <button onClick={sortTableOnScoreInAscendingOrder}>
          <Icon className="fa fa-caret-up" fontSize="14px" />
        </button>
        <button onClick={sortTableOnScoreInDescendingOrder}>
          <Icon className="fa fa-caret-down" fontSize="14px" />
        </button>
      </th>
      <th>{TABLE_HEADING_GENRE}</th>
      <th>{TABLE_HEADING_EDITORS_CHOICE}</th>
      <th>{TABLE_HEADING_RELEASE_YEAR}</th>
    </tr>
  );
}

export default TableHeading;
