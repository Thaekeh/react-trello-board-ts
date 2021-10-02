import React from "react";
import { Column as ColumnProp, Ticket } from "../../Data/initialBoardData";
import { AddCard } from "../addCard/AddCard";
import { Card } from "../card/Card";
import "./Column.scss";

interface Props {
  column: ColumnProp;
  tickets: Ticket[];
  onCreateNewCard: (cardTitle: string) => void;
}

export const Column: React.FC<Props> = ({
  column,
  tickets,
  onCreateNewCard,
}) => {
  return (
    <div className="column">
      <div>
        <h1>{column.title}</h1>
      </div>
      <div className="column__ticket-container">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
        <AddCard onCreateNewCard={onCreateNewCard} />
      </div>
    </div>
  );
};
