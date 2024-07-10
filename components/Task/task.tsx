import { Draggable } from "@hello-pangea/dnd";

export type TaskType = {
  id: string;
  title: string;
  description: string;
  subtasks: {}[];
};

interface TaskProps {
  task: TaskType;
  index: number;
}

export default function Task({ task, index }: TaskProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-72 min-h-2 bg-[#252631] flex flex-col pl-4 pr-4 pt-6 pb-6 mb-6 cursor-pointer rounded-lg border-solid border border-[#8686861a]"
        >
          <h2 className="text-[.9375rem] font-bold mb-2">{task.title}</h2>

          {task.subtasks.length > 0 ? (
            <p className="text-xs font-bold text-[#828fa3]">
              1 of {task.subtasks.length} subtasks
            </p>
          ) : (
            ""
          )}
        </div>
      )}
    </Draggable>
  );
}
