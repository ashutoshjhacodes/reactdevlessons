import list from "../utils/list.json";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-column items-center w-[340px] h-[340px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg-rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        Dropdown
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="bg-blue-400 absolute flex flex-col top-60 item-start rounded-lg p-2 w-full">
          {list.map((item, i) => (
            <div className="flex w-full justify-between  hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4  p-4" key={i}>
              <h3 className="font-bold">{item.city}</h3>
              <h3>{item.emoticon}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
