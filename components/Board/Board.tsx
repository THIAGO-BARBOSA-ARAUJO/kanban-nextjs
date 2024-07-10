"use client";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import Task, { TaskType } from "../Task/task";
import { useEffect, useState } from "react";

type BoardType = {
  id: string;
  name: string;
  tasks: TaskType[];
};

type SourceDestinationType = {
  droppableId: string;
  index: number;
};

const boardMock: BoardType[] = [
  {
    id: "1",
    name: "New",
    tasks: [
      {
        id: "1",
        title: "Lutar",
        description: "Preciso me esforçar",
        subtasks: [
          { name: "Aquecimento", status: false },
          { name: "Siunintal", status: false },
        ],
      },
      {
        id: "2",
        title: "Fazer Arroz",
        description: "se vira parça",
        subtasks: [],
      },
      {
        id: "3",
        title: "Fazer Feijão",
        description: "se vira parça",
        subtasks: [],
      },
    ],
  },
  {
    id: "2",
    name: "Doing",
    tasks: [
      {
        id: "4",
        title: "Fazer a janta",
        description: "",
        subtasks: [],
      },
    ],
  },
  {
    id: "3",
    name: "Done",
    tasks: [
      {
        id: "5",
        title: "Passear com o cachorro",
        description: "",
        subtasks: [],
      },
      {
        id: "6",
        title: "Comemorar meu Aniversário de namoro.",
        description: "",
        subtasks: [],
      },
    ],
  },
];

export default function Board() {
  const [boards, setBoards] = useState<BoardType[]>([]);

  function reOrder<T>(
    source: SourceDestinationType,
    destination: SourceDestinationType
  ) {
    const indexSource = boardMock.findIndex(
      (item) => item.name === source.droppableId
    );

    const indexDestination = boardMock.findIndex(
      (item) => item.name === destination.droppableId
    );

    const [removed] = boardMock[indexSource].tasks.splice(source.index, 1);
    boardMock[indexDestination].tasks.splice(destination.index, 0, removed);

    return boardMock;
  }

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const items = reOrder(result.source, result.destination);

    setBoards(items);
  }

  useEffect(() => {
    setBoards(boardMock);
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-[#20212C] gap-8 h-[calc(100vh-91.33px)] flex p-6">
        {boards.map((column, index) => {
          return (
            <Droppable
              droppableId={column.name}
              type="list"
              direction="vertical"
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  key={index}
                  className=""
                >
                  <div>
                    <div className="mb-6 flex items-center">
                      <div className="w-4 h-4 rounded-full mr-3 bg-[#67E2AE]"></div>
                      <h1 className="text-[#828FA3] font-bold text-sm tracking-[2.4px]">
                        {column.name} ({column.tasks.length})
                      </h1>
                    </div>
                    <div
                      className={
                        column.tasks.length > 0
                          ? ""
                          : "outline-2 outline-dashed outline-[#828fa366] h-[calc(100vh-91.33px-85px)] w-[17.5rem] rounded-md"
                      }
                    >
                      {column.tasks.length > 0
                        ? column.tasks.map((task, index) => {
                            return (
                              <Task task={task} key={index} index={index} />
                            );
                          })
                        : ""}
                    </div>
                    {provided.placeholder}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
}
