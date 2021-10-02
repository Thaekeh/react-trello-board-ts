import React from "react";
import { BoardData } from "../../Data/initialBoardData";
import { Column } from "../Column/Column";
import "./BoardContent.css";

interface Props {
  boardData: BoardData;
}

export const BoardContent: React.FC<Props> = ({ boardData }) => {
  const columns = boardData.columnOrder.map(
    (column) => boardData.columns[column]
  );

  return (
    <div className="board__content">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
};
