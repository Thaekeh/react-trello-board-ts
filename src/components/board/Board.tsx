import initialBoardData from "../../Data/initialBoardData";
import { BoardContent } from "../boardContent/BoardContent";
import { BoardHeader } from "../boardHeader/BoardHeader";
import "./Board.css";

interface Props {}

export const Board: React.FC<Props> = () => {
  // const [boardData, setBoardData] = useState(initialBoardData);

  const onCreateNewCard = (cardTitle: string) => {
    console.log("creating carasdfd");
    console.log(cardTitle);
    const ticket = {
      title: cardTitle,
      id: "asodijfjoias",
    };
    initialBoardData.tickets["asodijfjoias"] = ticket;
    initialBoardData.columns["column_1"].tickets.push(ticket.id);
    console.log(initialBoardData);
    // setBoardData(initialBoardData);
  };

  return (
    <div className="board">
      <BoardHeader boardTitle={initialBoardData.boardSettings.title} />
      <BoardContent
        boardData={initialBoardData}
        onCreateNewCard={onCreateNewCard}
      />
    </div>
  );
};
