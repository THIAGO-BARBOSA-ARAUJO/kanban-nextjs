import Image from "next/image";

export default function Header() {
  return (
    <header className="h-[91.33px] flex pl-8 pr-8 items-center justify-between w-[calc(100vw-288px)] border-b border-[#3E3F4E]">
      <p className=" font-bold text-2xl">Platform Launch</p>
      <div className="flex gap-4 justify-center items-center">
        <p className="bg-[#635FC7] hover:bg-[#A8A4FF] cursor-pointer rounded-3xl pt-3 font-bold pb-3 pl-4 pr-4 text-[15px]">
          + Add New task
        </p>
        <div className=" hover:bg-[#20212C] flex cursor-pointer rounded-3xl justify-center items-center pt-2 pb-2 pl-1 pr-1">
          <Image
            className="ml-1 w-[8px] h-[20px]"
            src="/assets/headerMenu.svg"
            width={10}
            height={10}
            alt="imagem de menu do headr"
          />
        </div>
      </div>
    </header>
  );
}
