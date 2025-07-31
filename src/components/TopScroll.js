import { FaArrowUp } from "react-icons/fa";
function TopScroll() {
  return (
    <div className="w-full flex justify-end rounded-full  p-4">
        <div className="w-10 h-10 flex justify-center items-center bg-[#f5f5f5] border rounded-full">
          <a href="#home">
            <FaArrowUp />
          </a>
        </div>
    </div>
  )
}

export default TopScroll;
