import React from "react";
import { BoardData } from "../../Data/initialBoardData";
import { Column } from "../column/Column";
import "./BoardContent.css";

interface Props {
  boardData: BoardData;
  onCreateNewCard: (cardTitle: string) => void;
}

export const BoardContent: React.FC<Props> = ({
  boardData,
  onCreateNewCard,
}) => {
  const columns = boardData.columnOrder.map(
    (column) => boardData.columns[column]
  );

  return (
    <div className="board__content">
      {columns.map((column) => {
        const tickets = column.tickets.map(
          (ticket) => boardData.tickets[ticket]
        );
        return (
          <Column
            key={column.id}
            column={column}
            tickets={tickets}
            onCreateNewCard={onCreateNewCard}
          />
        );
      })}
    </div>
  );
};
