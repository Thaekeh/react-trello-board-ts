import React from "react";
import "./BoardHeader.scss";

interface Props {
  boardTitle: string;
}

export const BoardHeader: React.FC<Props> = ({ boardTitle }) => {
  return (
    <div className="board__header">
      <h1>{boardTitle}</h1>
    </div>
  );
};
