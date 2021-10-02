import { useState } from "react";
import initialBoardData from "../../Data/initialBoardData";
import { BoardContent } from "../boardContent/BoardContent";
import { BoardHeader } from "../boardHeader/BoardHeader";
import "./Board.css";

export const Board = () => {
  const [boardData] = useState(initialBoardData);

  return (
    <div className="board">
      <BoardHeader boardTitle={boardData.boardSettings.title} />
      <BoardContent boardData={boardData} />
    </div>
  );
};
