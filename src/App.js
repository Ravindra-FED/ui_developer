import React, { useState, useEffect } from "react";
import TableHeading from "./table-heading/table-heading";
import TableBody from "./table-body/table-body";
import BASE_GAME_URL, { SEARCH_PLACEHOLDER } from "./App.constants";
import Search from "./Search/Search";
import "./styles.css";

function App() {
  const [gameDetails, setGameDetails] = useState(() => {});

  useEffect(() => {
    fetch(BASE_GAME_URL)
      .then(fetchedGamesDetails => fetchedGamesDetails.json())
      .then(gameDetails => {
        setGameDetails(gameDetails);
        localStorage.setItem("gameDetails", [...gameDetails]);
      });
  }, []);

  function sortTableOnScoreInAscendingOrder() {
    let sortedArrayInAscendingOrder = [...gameDetails];
    sortedArrayInAscendingOrder.sort(
      (gameDetail1, gameDetail2) => gameDetail1.score - gameDetail2.score
    );
    setGameDetails(sortedArrayInAscendingOrder);
  }

  function sortTableOnScoreInDescendingOrder() {
    let sortedArrayInDescendingOrder = [...gameDetails];
    sortedArrayInDescendingOrder.sort(
      (gameDetail1, gameDetail2) => gameDetail2.score - gameDetail1.score
    );
    setGameDetails(sortedArrayInDescendingOrder);
  }

  function sortTableOnPlatForm() {
    let sortedArrayPlatforms = [...gameDetails];
    sortedArrayPlatforms.sort((gameDetails1, gameDetail2) => {
      let platForm1 = gameDetails1.platform;
      let platForm2 = gameDetail2.platform;
      return platForm1 < platForm2 ? -1 : platForm1 > platForm2 ? 1 : 0;
    });
    setGameDetails(sortedArrayPlatforms);
  }

  function onSearcByTitleChange(e) {}

  return (
    <div className="App">
      {gameDetails && (
        <>
          <Search
            placeHolder={SEARCH_PLACEHOLDER}
            onKeyUp={onSearcByTitleChange}
          />
          <table>
            <thead>
              <TableHeading
                sortTableOnScoreInAscendingOrder={
                  sortTableOnScoreInAscendingOrder
                }
                sortTableOnScoreInDescendingOrder={
                  sortTableOnScoreInDescendingOrder
                }
                sortTableOnPlatForm={sortTableOnPlatForm}
              />
            </thead>
            <tbody>
              {gameDetails.map((gameDetail, index) => (
                <TableBody gameDetail={gameDetail} key={index} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
