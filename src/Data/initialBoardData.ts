export interface Column {
  id: string;
  title: string;
  tickets: string[];
}

export interface Ticket {
  id: string;
  title: string;
}

export interface BoardData {
  boardSettings: {
    title: string;
  };
  columns: { [columnId: string]: Column };
  tickets: { [ticketId: string]: Ticket };
  columnOrder: string[];
}

const initialBoardData: BoardData = {
  boardSettings: {
    title: "My New App",
  },
  columns: {
    column_1: {
      id: "column_1",
      title: "TO DO",
      tickets: ["ticket_1"],
    },
    column_2: {
      id: "column_2",
      title: "In Progress",
      tickets: ["ticket_2"],
    },
  },
  tickets: {
    ticket_1: {
      id: "ticket_1",
      title: "Design App Logo",
    },
    ticket_2: {
      id: "ticket_2",
      title: "Create Firebase Collections",
    },
  },
  columnOrder: ["column_1", "column_2"],
};

export default initialBoardData;
