import Image from "next/image";

type Board = {
  name: string;
  id: number;
};

export function SideNav() {
  const mocks = [
    {
      id: 1,
      name: "Platform Launch",
    },
    {
      id: 2,
      name: "Marketing Plan",
    },
    {
      id: 3,
      name: "Roadmap",
    },
  ];

  return (
    <div className="flex flex-col h-screen min-w-72 border-solid border-r border-[#3E3F4E]">
      <div className="flex gap-10 p-8 border-solid border-b border-[#3E3F4E]">
        <Image
          className="w-auto h-auto"
          src="/assets/logo.svg"
          width={155}
          height={23}
          alt="imagem de close"
        />
      </div>

      <div className="flex flex-col gap-3 pr-6">
        <p className="pl-7 font-bold text-[#828FA3] text-[12px] mt-4 tracking-[2.5px] ">
          ALL BOARDS ({mocks.length})
        </p>

        {mocks.map((board: Board) => {
          return (
            <div
              key={board.id}
              className="text-[#828FA3] hover:text-[#fff] hover:bg-[#A8A4FF] flex align-middle gap-3 cursor-pointer pt-2 pr-4 pb-2 rounded-r-3xl pl-7"
            >
              <img
                width={16}
                height={16}
                className="mt-1"
                src="/assets/board.svg"
                alt="imagem do board"
              />
              <p className="font-bold text-base ">{board.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
