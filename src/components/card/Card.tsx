import { Ticket } from "../../Data/initialBoardData";
import "./Card.scss";

interface Props {
  ticket: Ticket;
}

export const Card: React.FC<Props> = ({ ticket }) => {
  return (
    <div className="card">
      <p className="card__title">{ticket.title}</p>
    </div>
  );
};
