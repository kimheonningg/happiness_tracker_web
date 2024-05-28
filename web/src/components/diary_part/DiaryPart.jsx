import { useState } from "react";
import { BookOpenIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function DiaryPart() {
  return(
    <div className="flex flex-col border-solid border-2 border-white">
      <DiaryPartHeader />
      <input className="w-full my-1 bg-transparent border-solid border-b-2 border-PinkTheme/Level5"></input>
    </div>
  )
}

export function DiaryPartHeader() {
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const handleMouseEnter = () => { setShowDescriptionBox(true); };
  const handleMouseLeave = () => { setShowDescriptionBox(false); };

  return (
    <div className="flex flex-row justify-center bg-PinkTheme/Level2 rounded-md my-1">
      <BookOpenIcon className="w-5 h-5" />
      <p className="text-md font-bold pl-1">
        오늘의 일기
      </p>
      <div className = "relative">
        <QuestionMarkCircleIcon
          className = "w-3 h-3 ml-1 hover:bg-PinkTheme/Level5 hover:rounded-lg"
          onMouseEnter = {handleMouseEnter}
          onMouseLeave = {handleMouseLeave}
        />
        {showDescriptionBox &&
          <div className = "absolute top-2">
            <DescriptionBox />
          </div>
        }
      </div>
    </div>
  )
}

export function DescriptionBox() {
  return (
  <div className="bg-PinkTheme/Level1 rounded-sm w-72">
    <p className="text-sm flex justify-center"> 오늘의 일기를 간단히 작성하는 공간 </p>
  </div>
  )
}
